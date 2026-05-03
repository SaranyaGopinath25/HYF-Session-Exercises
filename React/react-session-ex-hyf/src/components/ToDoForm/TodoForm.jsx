import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [note, setNote] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            name : name,
            description : description,
            duration : duration,
            note : note
        }
        console.log("ToDOs : ",newTodo);
        setTodos([...todos, newTodo]);
    }


    return(
        <div className={styles.container}>
        <h1>To Do</h1>
        <div >
        <form id="todo-form" onSubmit={handleSubmit} className={styles["todo-form"]}>
            <label htmlFor="name">
                Name : <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="description">
                Description : <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label htmlFor="duration">
                Duration : <input type="number" name="duration" value={duration} onChange={e => setDuration(Number(e.target.value))} />
            </label>
            <label htmlFor="note">
                Note : <input type="text" name="note" value={note} onChange={e => setNote(e.target.value)} />
            </label>
            <button type="submit">Add To Do</button>
        </form>
        </div>



        <div className={styles.todolist}>
            <h2>My To Dos</h2>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h4>Name : {todo.name}</h4>
                    <p>Description : {todo.description}</p>
                    <p>Duration : {todo.duration}</p>
                    <p>Note : {todo.note}</p>
                </div>
            ))}

        </div>
        
        </div>
    )
}
export default TodoForm;