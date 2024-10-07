import React from 'react';
import styles from '../modules/TodoItem.module.css'; // Importa o CSS Module

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={styles.todoItem}>
      <span className={styles.todoText}>{todo.title}</span>
      <button className={styles.deleteButton} onClick={() => onDelete(todo._id)}>
        Excluir
      </button>
    </div>
  );
};

export default TodoItem;
