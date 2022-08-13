import React from "react";
//Components
import TodoList from "./TodoList"
import Header from "./Header"

class TodoContainer extends React.Component{
    state={
        todos: [
            {
                id:1,
                title:"Setup Development environment",
                completed:true
            },
            {
                id:2,
                title:"Develop the website",
                completed:false
            },
            {
                id:3,
                title:"Test the website",
                completed:false
            },
            {
                id:4,
                title:"Deploy the website",
                completed:false
            }
        ]
    }

    render(){
        return(
            <div>
                <Header />
                <TodoList todos={this.state.todos}></TodoList>
            </div>
        )
    }
}

export default TodoContainer