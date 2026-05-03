import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

useEffect(() => {
    window.addEventListener("resize", () => {
        console.log("Window resized 111111::::: ",window.innerWidth, window.innerHeight);
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    })
    
},[windowHeight,windowWidth])

return {
    width : windowWidth,
    height : windowHeight
}

}
export default useWindowSize;