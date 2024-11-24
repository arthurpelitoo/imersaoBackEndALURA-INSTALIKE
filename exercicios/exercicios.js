import express from "express";

    //Exercício 1: Criar um Novo Post
// Adicione um novo objeto ao array posts que você criou,
// com uma descrição e um link de imagem.
// Certifique-se de que cada post tenha um ID único.

const app = express();
app.use(express.json()); // Para interpretar JSON no corpo da requisição

const posts = [
    { id: 1, descricao: "eu me remexo muito", imagem: "https://placehold.co/600x400" },
    { id: 2, descricao: "ta calor", imagem: "https://placehold.co/600x400" },
    { id: 3, descricao: "procrastinação", imagem: "https://placehold.co/600x400" }
];


// Rota POST para adicionar novos posts
app.post("/posts/addPost", (req, res) => {
    console.log(req.body);
    const { descricao, imagem } = req.body;

    // Validação simples: Verificar se os campos foram enviados
    if (!descricao || !imagem) {
        return res.status(400).json({ error: "Campos descrição e imagem são obrigatórios!" });
    }

    // Gerar novo ID único
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    // const newDescricao = 'sei la';

    // const newImagem = 'tantofaz';

    // Criar novo post
    const newPost = { id: newId, descricao, imagem };

    // Adicionar ao array de posts
    posts.push(newPost);

    // Responder com sucesso e o novo post criado
    return res.status(201).json({ message: "Post adicionado com sucesso!", post: newPost });
});

// Servidor escutando na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});

    //Exercício 2: Criar uma Rota para Adicionar Posts
// Crie uma nova rota POST em seu servidor
// que permita adicionar novos posts ao array posts.
// A rota deve receber um objeto JSON
// com a descrição e o link da imagem e adicionar esse objeto ao array.

    //Exercício 3: Implementar a Exclusão de um Post
// Crie uma nova rota DELETE que permita excluir um post com base no seu ID.
// A rota deve remover o post do array posts e retornar um status 204 (No Content)
// se a exclusão for bem-sucedida.



    //Exercício 4: Melhorar a Rota de Busca por ID
// Melhore a rota GET /posts/:id para que, se o post não for encontrado,
// retorne um status 404 e uma mensagem informando que o post não foi encontrado.

    //Exercício 5: Documentação da API
 // Crie um arquivo README.md no seu projeto e documente as rotas que você criou,
 // incluindo os métodos HTTP, os parâmetros esperados e exemplos de requisições e respostas.
 // [faça isso após a imersao.]
