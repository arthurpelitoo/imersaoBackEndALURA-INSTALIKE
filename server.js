// Importa o framework Express para criar o servidor e o middleware `json`
// para interpretar JSON nas requisições.

import express, { json } from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do servidor Express,
// permitindo configurar rotas e middleware.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Define a porta do servidor a partir de uma variável de ambiente
// ou, caso não esteja definida, usa 3000 como padrão.
const port = process.env.PORT || 3000;

// Inicia o servidor Express na porta definida anteriormente
// e exibe uma mensagem no console quando estiver rodando.
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); 
    // Mensagem exibida no terminal para confirmar que o servidor está ativo.
});