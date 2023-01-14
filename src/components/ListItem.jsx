import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { DeleteTodo, EditTodo } from '../context/GlobalActions'

function ListItem({ todo }) {

    const { dispatch } = useContext(GlobalContext)

    const handleEdit = (todo) => {
        const data = EditTodo(todo)

        dispatch(
            {
                type: "EDIT_TODO",
                payload: data
            }
        )
    }
    const handleDelete = (id) => {
        const data = DeleteTodo(id)

        dispatch({
            type: "DELETE_TODO",
            payload: data
        })
    }
    return (
        <li className="to-do ">{todo.text}<span className="buttonsspan">
            <button className="edit-btn" onClick={() => handleEdit(todo)} > Edit</button>
            <button className="cancel-btn" onClick={() => handleDelete(todo.id)} >x</button></span>
        </li>
    )
}

export default ListItem