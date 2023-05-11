import './item.css';

function ToDoItem ({todo, del}) {
    return (
        <div className='div'>
            <label className='lab'>
                {todo.text}
            </label>
            <button className='del' onClick={() => {
                    del(todo);
                }}>X</button>
        </div>
    )
}

export default ToDoItem;
