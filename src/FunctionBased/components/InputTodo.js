import React from "react";

class InputTodo extends React.Component{
    state={
        title:""
    }

    onChange = e =>{
       this.setState({
        [e.target.name]: e.target.value
       });
    }

    onSubmit = e =>{
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoItem(this.state.title);
        } else {
            alert("Please enter an item")
        }
        this.setState({
            title: ""
           });
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit} className="form-container">
                <input type="text" name="title" className="input-text" 
                value={this.state.title}
                onChange={this.onChange}
                placeholder="Add Todo..." />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo