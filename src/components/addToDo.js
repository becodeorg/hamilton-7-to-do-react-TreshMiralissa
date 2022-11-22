import React, { useRef } from "react";

function AddToDo(props) {
    const inputRef = useRef();

    function clickHandler(){
        const inputElement = inputRef.current; //cree le lien entre la balise input et la variable InputElement - le .value = contient la valeur entree dans la case 'input' de la page web
        // console.log(inputElement.value);

        const newTodoList= JSON.parse(JSON.stringify(props.todos)); //meme chose que -> const newTodoList = [...todos];
        newTodoList.push(inputElement.value);
        props.setTodos(newTodoList);
    }

    return(
<div className="m-10">
        <input ref={inputRef}
        className="p-1 rounded-md border-2 border-slate-500"
        type="text" 
        placeholder="Write a new todo" />
    <button className="bg-pink-500 rounded-md p-1.5 text-white mt-5 font-bold" type = 'submit' onClick={clickHandler}>Add Todo</button>
</div>
    )
}



export default AddToDo;