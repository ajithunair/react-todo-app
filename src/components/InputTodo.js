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
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" 
                value={this.state.title}
                onChange={this.onChange}
                placeholder="Add Todo..." />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo