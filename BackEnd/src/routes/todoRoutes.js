const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Retorna todas as tarefas
 *     description: Obtém a lista de todas as tarefas cadastradas
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID da tarefa.
 *                     example: 60c72b2f9b1d8e1e54faad10
 *                   title:
 *                     type: string
 *                     description: Título da tarefa.
 *                     example: Comprar leite
 */
router.get('/', todoController.getTodos);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Adiciona uma nova tarefa à lista
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *                 example: Estudar Node.js
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 */
router.post('/', todoController.createTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     description: Atualiza o título de uma tarefa específica pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O novo título da tarefa
 *                 example: Estudar Swagger
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 */
router.put('/:id', todoController.updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     description: Remove uma tarefa da lista pelo seu ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser deletada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 */
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
