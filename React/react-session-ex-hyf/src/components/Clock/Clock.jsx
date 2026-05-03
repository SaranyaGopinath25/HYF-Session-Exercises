import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => { 
    const [time, setTime] = useState(new Date());

    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
    },[]);
    return(
        <div className={styles.container}>
            <h1>Current Time</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock;