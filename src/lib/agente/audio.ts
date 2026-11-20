import "server-only";
import { baixarAudio } from "./uazapi";

/** Baixa o áudio pela UAZAPI e transcreve no Groq (Whisper). */
export async function transcreverAudio(mensagemId: string): Promise<string> {
  const chave = process.env.GROQ_API_KEY;
  if (!chave) throw new Error("Variável de ambiente ausente: GROQ_API_KEY");
  const { dados } = await baixarAudio(mensagemId);
  const form = new FormData();
  form.append("file", dados, "audio.mp3");
  form.append("model", "whisper-large-v3-turbo");
  form.append("language", "pt");
  const r = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${chave}` },
    body: form,
  });
  if (!r.ok) throw new Error(`Groq ${r.status}: ${await r.text()}`);
  const { text } = (await r.json()) as { text?: string };
  return (text ?? "").trim();
}
