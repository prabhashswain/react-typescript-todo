import React from 'react';
import { Todos } from '../models/model';
import SingleTodo from './SingleTodo';
import './style.css';

interface todoProps{
    todos:Todos[];
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList:React.FC<todoProps> = ({ todos,setTodos }) => {
    return (
        <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
    )
}

export default TodoList;
