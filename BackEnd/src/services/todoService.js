const Todo = require('../models/todo');

// Lógica para buscar todas as tarefas
const getAllTodos = async () => {
    return await Todo.find();
};

// Lógica para criar uma nova tarefa
const createTodo = async (title) => {
    const todo = new Todo({ title });
    return await todo.save();
};

// Lógica para atualizar uma tarefa
const updateTodo = async (id, title, completed) => {
    return await Todo.findByIdAndUpdate(
        id,
        { title, completed },
        { new: true } // Retorna a tarefa atualizada
    );
};

// Lógica para deletar uma tarefa
const deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id);
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
