const AddTodo = () =>{

    return(
        <div className="flex flex-col px-5 py-10">
            <input 
            type="text" 
            placeholder="Add Todo ..." 
            className="p-2 border-2 rounded self-start" />
            <button className="px-5 py-2 bg-pink-500 rounded text-white self-start mt-5">Submit</button>
        </div>
    );
};

export default AddTodo