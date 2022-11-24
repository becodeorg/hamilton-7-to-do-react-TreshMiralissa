import { FcFullTrash } from 'react-icons/fc';

const ListTodo = ({todos, setTodos}) => {
    
    const handleCheck = (id) =>{
        const newList = todos.map((todo)=>{
            if(todo.id === id){
                todo.done = !todo.done;
            }
            return todo;
        })
        setTodos(newList);
    };

    const handleDelete = (id) =>{
        const newList = todos.filter((todo)=>{
            return todo.id !== id;
        });
        setTodos(newList);
    };

    return(
        <ul className="p-5">
            {todos.map((todo) =>{
                return(
                    <li className ="flex items-center" key={todo.id}>
                        <input 
                            className="mr-3"
                            type="checkbox" 
                            id={todo.id}
                            defaultChecked={todo.done}
                            onChange={()=> {handleCheck(todo.id)}}/>
                        <label className={todo.done ? "line-through" :"no-underline"} /*? pose une question si c'est oui - 1er, si c'est non - le 2nd */
                        htmlFor={todo.id}>{todo.name}</label>

                        <button className="ml-4" onClick={()=>{handleDelete(todo.id)}}>
                            <FcFullTrash className="text-3xl"/>
                        </button>
                    </li>
                    );
                })
            } 
        </ul>
    )
};

export default ListTodo;