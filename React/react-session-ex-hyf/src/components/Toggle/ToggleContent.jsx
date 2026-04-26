
const ToggleContent = ({show, children}) => {
    return(
        <div style={{border: "1px solid black", padding: "10px", margin: "10px", height: "200px", width: "400px"}}>
        
            {show && children}

        </div>
   )
}

export default ToggleContent;