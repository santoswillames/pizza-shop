import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

// com o parse a gente valida que o env tenha a mesma estrutura do schema
// Caso não tenha, vai dar um erro e não vai deixar a aplicação rodar
export const env = envSchema.parse(import.meta.env)
