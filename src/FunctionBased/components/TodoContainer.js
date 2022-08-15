import React, {useState, useEffect} from "react";
//Components
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
//UUID
import {v4 as uuidv4} from "uuid";

const TodoContainer = () =>{
    
    const[todos, setTodos] = useState(getInitialTodos())

    // useEffect(() => {
    //     console.log("useEffect")
    //     const temp=localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)
    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // }, [])

    function getInitialTodos(){
        const temp=localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        return loadedTodos || []
    }

    useEffect(() => {
        console.log("saving todos to localStorage")
        const temp=JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const handleChange = id => {
        setTodos(prevState =>
          prevState.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          })
        )
      }

    const deleteTodo = (id)=>{
        setTodos([
                ...todos.filter(todo=>{
                    return todo.id !== id;
                })
            ]);
    }

    const addTodoItem = title =>{
        const newItem={
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newItem]);
    };

    const setUpdate = (updatedTitle, id)=>{
        setTodos(todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle;
                }
                return todo;
            })
        )
    }
    
    return(
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoItem={addTodoItem} />
                <TodoList 
                todos={todos} 
                deleteTodoProps = {deleteTodo}
                handleChangeProps = {handleChange}
                setUpdate = {setUpdate} />
            </div>
        </div>
        
    )
    
}

export default TodoContainer