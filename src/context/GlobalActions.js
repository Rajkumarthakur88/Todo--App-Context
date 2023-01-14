import { v4 as uuidv4 } from 'uuid';

// SAVE TODO
export const saveTodo = (FormValue) => {
    const NewTodo = {
        id: uuidv4(),
        text: FormValue
    }
    return NewTodo
}


// DELETE TODO
export const DeleteTodo = (id) => {
    return id
}

export const EditTodo = (todo) => {

    return todo
}


// UPDATE TODO
export const updateTodo = (id, text) => {
    const updatedTodo = {
        id: id,
        text: text
    }
    return updatedTodo
}