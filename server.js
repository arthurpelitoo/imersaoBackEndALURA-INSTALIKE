import express from "express";

// importei a função express da biblioteca do node.js e coloquei na constante app.

const app = express();

// agora a constante app pode chamar funções,

// a função listen tem dois parametros. 

// O primeiro vai ser um numero(que vai ser a porta que o servidor vai escutar.)
// ou string que vai reservar uma rota dentro da porta 3000(caso tenha sido especificada.) 
// com o nome que eu der.

// O segundo parametro vai ser uma função.

// logo em seguida se faz o uso de arrow function.

// o 3000 é o numero usado, pois essa é a padronização para servidores locais.
// ou seja o meu computador se tornou um servidor local.

app.listen(3000, () => {
    console.log("escuta aqui");
});

// chamei a rota de /api porque é como se fosse uma api mesmo. Nesse caso, apenas dei a resposta.
// dentro da função no segundo parametro, há o req e o res,
// o req é de requisição
// o res é de resposta ou resultado.

// nesse caso apenas usei o res para apresentar uma resposta sem requisição dentro da porta.

// repare que no res, usei a função status, o que ela faz? ela apresenta o tipo de resultado
// o numero 200 representa "OK", que significa "deu certo, normal." mas tem varios tipos de resultado.

// o send representa "enviar", ou seja a envie essa resposta 
// para a porta 3000 na rota "/api"

app.get("/api", (req, res) => {
    res.status(200).send("Bem vindo a imersão!");
});