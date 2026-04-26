
import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
        setName("");
        setEmail("");
    }

    
    return(
        <form action="submit" onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text" 
                placeholder="Enter your name" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                type="email" 
                placeholder="Enter your email" 
                required value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Submit</button>

        </form>
    )
}

export default Form;