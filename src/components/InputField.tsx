import React from 'react'
import './style.css'

interface todoProps {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleData:(e:React.FormEvent)=>void;
}

const InputField:React.FC<todoProps> = ({todo,setTodo,handleData}) => {
    return (
        <>
            <form onSubmit={handleData}
                className="input">
                <input
                    type="text"
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    placeholder="Enter a Todo"
                    className="input__box"
                />
                <button type="submit" className="input_submit">
                    GO
                </button>
            </form>
        </>
    )
}

export default InputField
