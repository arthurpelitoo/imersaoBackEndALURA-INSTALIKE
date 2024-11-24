import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Middleware para permitir que o servidor parseie o corpo das requisições no formato JSON.
    app.use(express.json());

    // Define uma rota GET em "/posts". Essa rota retorna todos os posts armazenados no banco de dados.
    app.get("/posts", listarPosts);
};

export default routes;