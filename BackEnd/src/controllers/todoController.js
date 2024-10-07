const todoService = require('../services/todoService');

// Função para listar todas as tarefas
const getTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas' });
    }
};

// Função para criar uma nova tarefa
const createTodo = async (req, res) => {
    const { title } = req.body;
    
    try {
        const newTodo = await todoService.createTodo(title);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa' });
    }
};

// Função para atualizar uma tarefa
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    try {
        const updatedTodo = await todoService.updateTodo(id, title, completed);
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar tarefa' });
    }
};

// Função para deletar uma tarefa
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
        await todoService.deleteTodo(id);
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar tarefa' });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
