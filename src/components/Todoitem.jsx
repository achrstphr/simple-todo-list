import React from 'react'
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditTodo from './EditTodo';

const Todoitem = ({ todo, markComplete, delTodo}) => {
  const getStyle = () => {
    return {
      backgroundColor: '#f0f0f0',
      color: '#000',
      borderRadius: '15px',
      padding: '10px',
      margin: '0',
      borderBottom: '2px #ccc dotted',
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }
  // const btnStyle = {
  //   float: 'right',
  //   cursor: 'pointer',
  //   background: 'crimson',
  //   border: 'none',
  //   padding: '5px 10px',
  //   borderRadius: '50%',
  //   color: '#fff'
  // }

  const editStyle = {
    float: 'right',
    cursor: 'pointer',
    margin: '10px'
  }

  const delStyle = {
    float: 'right',
    cursor: 'pointer',
    margin: '10px',
    color: 'red'
  }

  const showEdit = () => {
    return <div><EditTodo/></div>
  }

  const {id, completed, text} = todo

  return (
    <div style={getStyle()}>
      <p>
        <input type='checkbox' checked={completed} onChange={() => markComplete(id)}/> {' '} 
        {text}
        {/* <button style={btnStyle} onClick={() => delTodo(id)}>x</button> */}
        <RiDeleteBin6Line style={delStyle} onClick={() => delTodo(id)} />
        <FiEdit3 style={editStyle} onClick={() => showEdit()}/>
      </p>
    </div>
  )
}




 

export default Todoitem