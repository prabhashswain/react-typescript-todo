import React,{ useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todos } from './models/model';

const App:React.FC = ()=> {
  const [ todo,setTodo ] = useState<string>("")
  const [ todos,setTodos ] = useState<Todos[]>([])
  const handleData = (e:React.FormEvent)=>{
    e.preventDefault()
    if (todo) {
      setTodos([...todos,{ id:Date.now(),todo,status:false }]);
      setTodo("");
    }
  }
  
  return (
    <div className="App">
       <span className="heading">ToDo App</span>
       <InputField todo={todo} setTodo={setTodo} handleData={handleData} />
       <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
