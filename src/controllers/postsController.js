import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função `getTodosPosts` para buscar os posts do banco de dados.
    const posts = await getTodosPosts();
    // Retorna a lista de posts em formato JSON com o status HTTP 200 (sucesso).
    res.status(200).json(posts);
};