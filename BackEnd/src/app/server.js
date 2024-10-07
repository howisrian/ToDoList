require('dotenv').config();
const express = require('express');
const cors = require('cors');  
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc'); // Swagger JSDoc
const connectDB = require('../config/db');
const todoRoutes = require('../routes/todoRoutes');

// Conectar ao banco de dados
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Middleware para interpretar JSON
app.use(express.json());

// Configurações do Swagger JSDoc
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'API para gerenciamento de lista de tarefas',
      contact: {
        name: 'Support',
        email: 'riansantos.dev@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base do seu servidor
      },
    ],
  },
  apis: ['../routes/todoRoutes.js'], // Arquivos onde as rotas estão documentadas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Rota do Swagger UI
app.use(express.static('public')); // Adiciona o diretório público

// Configurações do Swagger com customização
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  customCssUrl: '/swagger-custom.css', // Aponta para o arquivo CSS customizado
}));


// Rotas
app.use('/api/todos', todoRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});
