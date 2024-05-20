import AddTodos from "./components/AddTodos"
import Header from "./components/layout/Header"
import Todo from "./components/todo"
import { useState } from "react"
function App() {
  const [todos, setTodos] = useState([
		{
			id: 1,
			completed: false,
			text: "Buy groceries",
		},
		{
			id: 2,
			completed: true,
			text: "Go to the gym"
		},
		{
			id: 3,
			completed: false,
			text: "Cook dinner for your family"
		}
	])

	//mark complete
	const markComplete = (id) => {
		setTodos(prevTodos => (
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    ));
	}

	const delTodo = (id) => {
		setTodos(prevTodos => (
			prevTodos.filter(todo => todo.id !== id)
		))
	}

	const addTodo = (newTodo) => {
			
    if (newTodo.trim() !== '') {
			setTodos(prevTodos => [...prevTodos, { id: getLastKey() + 1, text: newTodo, completed: false }] )
		}
		// console.log(todos.length)
		}
	const getLastKey = () => {
    if (todos.length > 0) {
      const keys = todos.map(todo => todo.id);
      return Math.max(...keys);
    }
    return null;
  };
	

  return (
    <>
			<Header />
			<AddTodos
				addTodo={addTodo}
			/>
			<Todo
				todos={todos}
				markComplete={markComplete}
				delTodo={delTodo}
			/>
    </>   
  )
   
}

export default App
