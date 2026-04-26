

const Button = ({text, onClickFn}) => {
    return(
        <button 
            style={
                {
                    "height" : "50px",
                    "width" : "200px", 
                    "backgroundColor" : "blue", 
                    "borderRadius" : "15px", 
                    "color" : "white" 
                }
            }
            onClick={onClickFn}>
            {text}
        </button>
    )
}

export default Button;