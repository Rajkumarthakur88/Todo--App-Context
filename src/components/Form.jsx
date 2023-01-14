import React, { useContext, useState, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import { saveTodo, updateTodo } from '../context/GlobalActions'
function Form() {
    const { dispatch, Edit } = useContext(GlobalContext)

    const [inputValue, setInputValue] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Edit.isEdit) {
            const data = updateTodo(Edit.todo.id, inputValue)
            dispatch(
                {
                    type: "UPDATE_TODO",
                    payload: data
                }
            )
        }
        else {

            const data = saveTodo(inputValue)
            dispatch({
                type: "ADD_TODO",
                payload: data
            })
        }
        setInputValue("")
    }

    useEffect(() => {
        console.log(Edit.todo.text);
        setInputValue(Edit.todo.text)
    }, [Edit])


    return (
        <form className="todoform" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" className="inputform" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Enter your To-Do" required />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

export default Form