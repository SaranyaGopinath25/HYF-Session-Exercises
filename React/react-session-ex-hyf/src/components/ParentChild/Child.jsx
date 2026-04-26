import { useState } from "react";

const Child = ({ data, updateParentData }) => {
    
  const [inputValue, setInputValue] = useState("");

  const updateData = () => {
    updateParentData(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h2>Parent Data</h2>
      <p>{data}</p>
      <input
        type="text"
        placeholder="Enter your message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={updateData}>Display My Message</button>
    </div>
  );
};

export default Child;
