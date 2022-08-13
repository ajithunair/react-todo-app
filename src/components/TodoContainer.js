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
                completed:true
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

    handleChange = (id)=>{
        this.setState(prevState => ({
            todos: prevState.todos.map(todo =>{
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        }))
    }

    deleteTodo = (id)=>{
        this.setState({
            todos: [
                ...this.state.todos.filter(todo=>{
                    return todo.id !== id;
                })
            ]
        });
    }

    render(){
        return(
            <div>
                <Header />
                <TodoList 
                todos={this.state.todos} 
                deleteTodoProps = {this.deleteTodo}
                handleChangeProps = {this.handleChange} />
            </div>
        )
    }
}

export default TodoContainer