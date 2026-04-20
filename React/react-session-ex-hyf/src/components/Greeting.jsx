const Greeting = () => {
    const myname = "Saranya";

    const getName = () => {
        return myname;
    }

    const scale = [1,2,3,4,5];
    return(
        <>
        <h1>Hello, welcome to HYF!</h1>
        <h2>My name is {getName()}!</h2>
        {/* This is my comment */}
        {scale.map(x => (<p>{x * 2}</p>))}
        <p>Today : {new Date().toLocaleDateString()}</p>
        </>
    )
}

export default Greeting;