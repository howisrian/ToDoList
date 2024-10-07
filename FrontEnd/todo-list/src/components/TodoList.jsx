import React, { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from '../api';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import styles from '../modules/TodoList.module.css'; // Importa o CSS Module

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos(); // Atualiza a lista após a exclusão
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Tarefas</h1>
      <AddTodo onTodoAdded={fetchTodos} />
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
