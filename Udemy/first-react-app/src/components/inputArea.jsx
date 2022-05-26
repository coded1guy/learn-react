import React, { useState } from 'react';

const InputArea = (props) => {
    let [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={()=>{
                inputText = inputText.trim();
                if(inputText.length > 0) {
                    props.onAdd(inputText);
                    setInputText("");
                }
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}


export { InputArea };