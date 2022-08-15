import React, {useState} from "react";

const InputTodo = (props) =>{
    const[inputText, setInputText]=useState({
        title: "",
    })

    const onChange = e =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        if(inputText.title.trim()){
            props.addTodoItem(inputText.title)
            setInputText({title: "", })
        } else {
            alert("Please enter item")
        }
    }
    return (
        <form onSubmit={onSubmit} className="form-container">
            <input type="text" name="title" className="input-text" 
            value={inputText.title}
            onChange={onChange}
            placeholder="Add Todo..." />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo