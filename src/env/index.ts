import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.error) {
  console.log("❌ Erro ao carregar as variáveis de ambiente!");
  throw new Error(`Erro: ${_env.error.format()}`);
}

export const env = _env.data;
