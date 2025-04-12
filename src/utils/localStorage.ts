import { Todo } from "../types/todo.type"

export const todosLocalStorage = ()=>{
    const data = localStorage.getItem("todos")
    return data?JSON.parse(data) : [ ]
}

export const saveTodos = (todos : Todo)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
}