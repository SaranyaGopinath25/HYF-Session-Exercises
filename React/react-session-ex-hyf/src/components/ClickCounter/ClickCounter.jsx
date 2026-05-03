
import { useState } from 'react';

const ClickCounter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count} </p>
            <button type="button" onClick={handleClick}>
                Click me
            </button>
        </div>
    )
    
}

export default ClickCounter