// Importa a função `conectarAoBanco`
// de um arquivo de configuração que se conecta ao MongoDB.

import conectarAoBanco from '../config/dbconfig.js';

// Chama a função de conexão com o banco de dados,
// usando a string de conexão definida em uma variável de ambiente.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que acessa o banco de dados e obtém todos os posts da coleção "posts".
export async function getTodosPosts() {
    // Acessa o banco de dados "imersao-instabytes" utilizando a conexão MongoDB.
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e os converte em um array.
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
};