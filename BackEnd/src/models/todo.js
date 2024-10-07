const mongoose = require('mongoose');

// Definindo o schema para tarefas
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },      // Título da tarefa
    completed: { type: Boolean, default: false }, // Status da tarefa
    createdAt: { type: Date, default: Date.now }  // Data de criação da tarefa
});

module.exports = mongoose.model('Todo', todoSchema);
