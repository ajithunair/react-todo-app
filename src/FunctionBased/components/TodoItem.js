import React, {useState, useEffect} from "react";

import styles from "./Todoitem.module.css"

const TodoItem = props =>
{
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        return () => {
            console.log("Clearing...")
        }
    }, [])
    const handleEditing = ()=>{
        setEditing(true)
    }

    const handleUpdateDone = event => {
        if(event.key === 'Enter' || event.key === 'Escape'){
            setEditing(false)
        } 
    }
    
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {completed, id, title} = props.todo;

    let viewmode = {}
    let editmode = {}

    if(editing){
        viewmode.display="none"
    } else {
        editmode.display="none"
    }

    return(
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewmode}>
            
                <input type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={()=> props.handleChangeProps(id)} />
                
                <span  style={completed?completedStyle:null}>
                    {title}
                </span>
                
                <button onClick={()=>props.deleteTodoProps(props.todo.id)}>Delete</button>
            </div>
            <input type="text" 
            className={styles.textInput} 
            style={editmode}
            value={title}
            onChange={e => {
                props.setUpdate(e.target.value, id)
            }}
            onKeyDown={handleUpdateDone} />
        </li>
    )
    
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