const ListTodo = () => {

    return(
        <ul className="p-5">
            <li>
                <input className="mr-3" type="checkbox" id="todo1"/>
                <label htmlFor="todo1">Learn React</label>
            </li>

            <li>
                <input className="mr-3" type="checkbox" id="todo2"/>
                <label htmlFor="todo2">Learn Tailwind</label>
            </li>

            <li>
                <input className="mr-3" type="checkbox" id="todo3"/>
                <label htmlFor="todo3">Finish project</label>
            </li>
        </ul>
    )
};

export default ListTodo;