import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [parentData, setParentData] = useState("Start");

    const updateData = (data) => {
        setParentData(data);
    }

    console.log("DATA ::::: "+parentData);
    return(
        <Child data={parentData} updateParentData={updateData} />
    )
}

export default Parent;