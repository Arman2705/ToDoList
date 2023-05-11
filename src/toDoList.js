import ToDoItem from "./toDoItem";

function ToDoList ({todos, del}) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        del={del}

                        />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;