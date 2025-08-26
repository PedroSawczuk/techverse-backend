import { app } from "./app";
import { env } from "./env";

app.get("/", () => {
  return "Olá Mundo!";
});

app.listen({ port: env.PORT }).then(() => {
  console.log(`🚀 API rodando em http://localhost:${env.PORT}`);
});
