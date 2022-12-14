import React from "react";
//Components
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
//UUID
import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component{
    state={
        todos: []
    }

    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({todos: loadedTodos})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", temp);
        }
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
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newItem]
        });
    };

    setUpdate = (updatedTitle, id)=>{
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle;
                }
                return todo;
            })
        })
    }
    render(){
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoItem={this.addTodoItem} />
                    <TodoList 
                    todos={this.state.todos} 
                    deleteTodoProps = {this.deleteTodo}
                    handleChangeProps = {this.handleChange}
                    setUpdate = {this.setUpdate} />
                </div>
            </div>
            
        )
    }
}

export default TodoContainer