import React from "react";
//Components
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
//UUID
import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component{
    state={
        todos: [
            {
                id: uuidv4(),
                title:"Setup Development environment",
                completed:true
            },
            {
                id: uuidv4(),
                title:"Develop the website",
                completed:true
            },
            {
                id: uuidv4(),
                title:"Test the website",
                completed:false
            },
            {
                id: uuidv4(),
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

    addTodoItem = title =>{
        const newItem={
            id: uuidv4(),
            title: title,
            completed: true
        };
        this.setState({
            todos:[...this.state.todos, newItem]
        });
    };

    render(){
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoItem={this.addTodoItem} />
                    <TodoList 
                    todos={this.state.todos} 
                    deleteTodoProps = {this.deleteTodo}
                    handleChangeProps = {this.handleChange} />
                </div>
            </div>
            
        )
    }
}

export default TodoContainer