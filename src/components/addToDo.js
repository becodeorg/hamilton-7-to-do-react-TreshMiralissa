const AddToDo = () => {
    return(
<div className="py-20">
    <div>
        <input className="
          p-1
          w-full
          max-w-[250px]
          rounded-md
          border-2
          border-slate-500"
          type="text" placeholder="Type a new todo" />
    </div>
    <button className="bg-blue-400 rounded-md p-2 text-white mt-5 font-bold" type = 'submit'>Add Todo</button>
</div>
    )
}



export default AddToDo;