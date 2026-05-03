import useWindowSize from "./useWindowSize.js";

const WindowResize = () => {

    const { width, height } = useWindowSize();
    console.log("Window Resize Component Rendered ::::: ",width, height);

    return(
            <div>
                <h1>Window Resize</h1>
                <p>Width: {width}</p>
                <p>Height: {height}</p>
            </div>
    )
}

    export default WindowResize;