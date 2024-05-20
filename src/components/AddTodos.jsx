import React,  { useState } from 'react'



const AddTodo = ({ addTodo }) => {

  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
    // console.log(e.target.name)
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type='text' value={newTodo} onChange={handleInputChange} placeholder='Add new Todo...' />
          <input type="submit" value="Submit" />
        </form>
      </>
      
    )
}

export default AddTodo