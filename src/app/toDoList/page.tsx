'use client';

import React, { useState } from 'react';
import './page.css';
import { Input } from 'antd';

export default function Page() {
  const { TextArea } = Input;
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = () => {
    if (currentTodo.trim() !== '') {
      if (editingIndex !== -1) {
        // Editing existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editingIndex ? currentTodo : todo
        );
        setTodos(updatedTodos);
        setEditingIndex(-1);
      } else {
        // Adding new todo
        setTodos([...todos, currentTodo]);
      }
      setCurrentTodo('');
    }
  };

  const editTodo = (index: number) => {
    setCurrentTodo(todos[index]);
    setEditingIndex(index);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  // const copyTodo =  (index: number) => {

  // }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="add-todo">
        <TextArea
          rows={4}
          placeholder="Enter a todo"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button onClick={addTodo}>
          {editingIndex !== -1 ? 'Save Edit' : 'Add Todo'}
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          
          <li key={index}>
            <span>{index + 1}.</span>
            <span className="todo-text" >{todo}</span>
            <button className="edit-button" onClick={() => editTodo(index)}>Edit</button>
            <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
            {/* <button className="copy-button" onClick={() => copyTodo(index)}>Copy</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
