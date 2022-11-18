export default function TodoList(){
    const todo = ["Translate informations", "Learn React", "Be Awesome !"];
    return(
        <ul>
            {TodoList.map((todo)=> (
            <li><input type="checkbox" />{todo}</li>
            ))}
        </ul>
    );
}
