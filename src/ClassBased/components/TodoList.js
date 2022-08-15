import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component
{
    render()
    {
        return(
            <ul>
                {
                    this.props.todos.map(todo=>(
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodoProps={this.props.deleteTodoProps}
                    handleChangeProps = {this.props.handleChangeProps} 
                    setUpdate = {this.props.setUpdate} />))
                }
            </ul>
        )
    }
}
export default TodoList