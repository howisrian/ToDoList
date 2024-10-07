import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos'; // Ajuste a URL conforme necessário

export const getTodos = () => {
  return axios.get(API_URL);
};

export const addTodo = (todo) => {
  return axios.post(API_URL, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
