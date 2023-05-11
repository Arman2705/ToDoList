import { useState } from 'react';
import './App.css';
import ToDoList from './toDoList';
import ToDoForm from './Form/toDoForm';
import ToDoFooter from './Footer/toDoFooter';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <ToDoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);
      }} />
      <ToDoList todos={todos} del={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id))
        }} />
      <ToDoFooter clear={() => {
        setTodos(todos.filter((todo) => todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
