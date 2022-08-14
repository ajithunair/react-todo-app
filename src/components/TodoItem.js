import React from "react";

import styles from "./Todoitem.module.css"

class TodoItem extends React.Component
{
    render(){
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const {completed, id, title} = this.props.todo;
        return(
            <li className={styles.item}>
                <input type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={()=> this.props.handleChangeProps(id)} />
                
                <span  style={completed?completedStyle:null}>
                    {title}
                </span>
                <button onClick={()=>this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
            </li>
        )
    }
}


// function TodoItem(props){
//     return(
//         <li>
//             <input type="checkbox" checked={props.todo.completed} />
//             {props.todo.title}
//         </li>
//     )
// }

export default TodoItem