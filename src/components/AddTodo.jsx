import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({addItem}) =>{

    const inputRef = useRef();

    const clickHandler = () =>{
        const todo = {
            name: inputRef.current.value,
            done:false, 
            id: uuidv4(),
        }
        addItem(todo);
    }

    return(
        <div className="flex flex-col px-5 py-10">
            <input
            ref={inputRef} 
            type="text" 
            placeholder="Add Todo ..." 
            className="p-2 border-2 rounded self-start" />
            <button className="px-5 py-2 bg-pink-500 rounded text-white self-start mt-5" onClick={clickHandler}>Submit</button>
        </div>
    );
};

export default AddTodo