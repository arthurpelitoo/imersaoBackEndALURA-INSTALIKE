// Importa o cliente MongoClient da biblioteca mongodb,
// usado para conectar ao banco de dados MongoDB.
import { MongoClient } from 'mongodb';

// Exporta uma função assíncrona chamada conectarAoBanco,
// que recebe uma string de conexão como parâmetro.
export default async function conectarAoBanco(stringConexao) {
  // Declara uma variável para armazenar a instância do MongoClient.
  let mongoClient;

  try {
      // Cria uma nova instância do MongoClient com a string de conexão.
      mongoClient = new MongoClient(stringConexao);
      
      // Exibe uma mensagem no console informando que está conectando.
      console.log('Conectando ao cluster do banco de dados...');
      
      // Aguarda a conexão ao banco de dados.
      await mongoClient.connect();
      
      // Exibe uma mensagem no console ao conectar com sucesso.
      console.log('Conectado ao MongoDB Atlas com sucesso!');

      // Retorna o cliente MongoClient conectado.
      return mongoClient;
  } catch (erro) {
      // Exibe uma mensagem de erro no console caso a conexão falhe.
      console.error('Falha na conexão com o banco!', erro);
      
      // Encerra o processo com um código de erro.
      process.exit();
  }
};