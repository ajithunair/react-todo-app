import React from "react";

import styles from "./Todoitem.module.css"

class TodoItem extends React.Component
{
    state={
        editing: false
    }

    componentWillUnmount(){
        console.log("Cleaning up...")
    }

    handleEditing = ()=>{
        this.setState({ editing: true })
    }

    handleUpdateDone = event => {
        console.log(event.key)
        if(event.key === 'Enter' || event.key === 'Escape'){
            this.setState({  editing: false })
        } 
    }

    render(){
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const {completed, id, title} = this.props.todo;
        let viewmode = {}
        let editmode = {}
        if(this.state.editing){
            viewmode.display="none"
        } else {
            editmode.display="none"
        }
        return(
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewmode}>
                
                    <input type="checkbox" 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={()=> this.props.handleChangeProps(id)} />
                    
                    <span  style={completed?completedStyle:null}>
                        {title}
                    </span>
                    
                    <button onClick={()=>this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                </div>
                <input type="text" 
                className={styles.textInput} 
                style={editmode}
                value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdateDone} />
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