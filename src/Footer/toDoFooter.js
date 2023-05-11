import './style.css';

function ToDoFooter ({clear}) {
    return (
        <div className="div">
            <button className="btn" onClick={clear}>Clear All</button>
        </div>
    )
}

export default ToDoFooter;