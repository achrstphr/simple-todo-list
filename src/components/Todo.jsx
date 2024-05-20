import React, { useState } from 'react'
import Todoitem from './Todoitem'


function Todo({todos, markComplete, delTodo, addTodo}) {
	
	// console.log(props.count)
	return (
			<>	
				{todos.map(todo =>
					<Todoitem
						key={todo.id}
						todo={todo}
						markComplete={markComplete}
						delTodo={delTodo}

					/>
				)}
    	</>
  )
}


export default Todo