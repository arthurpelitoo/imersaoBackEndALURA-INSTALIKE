import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Middleware para permitir que o servidor parseie o corpo das requisições no formato JSON.
    app.use(express.json());

    // Define uma rota GET em "/posts". Essa rota retorna todos os posts armazenados no banco de dados.
    app.get("/posts", listarPosts);
    // Define uma rota POST em "/criarPost". Essa rota cria um novo post no banco de dados.
    app.post("/criarPost", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;