import React, { useState } from 'react';
import { addTodo } from '../api';
import styles from '../modules/AddTodo.module.css'; // Importa o CSS Module

const AddTodo = ({ onTodoAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title };
    await addTodo(newTodo);
    onTodoAdded(); // Notifica o componente pai para atualizar a lista
    setTitle(''); // Limpa o campo de input após adicionar
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.addButton} type="submit">
        Adicionar
      </button>
    </form>
  );
};

export default AddTodo;
