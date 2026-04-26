import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(Math.max(0,count - 1));
    }

    return(

        <div className={styles.container}>
            <h3>Counter</h3>
            <p>{count}</p>

            <div className={styles.counter}>

            <button onClick={incrementCounter}>
                +
            </button>

            <button onClick={decrementCounter}>
                -
            </button>

            </div>

        </div>

    )
}

export default Counter;