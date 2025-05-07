import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	}
	const handleOnClick = () => {
		setTodos([...todos, inputValue]);
		setInputValue("");
	}
	const handleDelete = (index) => {
		const updateTodos = todos.filter((todos, i)=> i !== index)
setTodos(updateTodos)

	}
return (
	<div className="container">
		<h2>TODOS </h2>
		<div clasName="container _input">
			<input type="text" value={inputValue} onChange={handleOnChange} />
			<button type="button" className="btn btn-primary" onClick={handleOnClick}> Add</button>
			</div>
        
			<ul>
				{
					todos.length > 0 ? todos.map((todo, index) => {
						return (
							<li key={index}>{todo}<button type="button" className="btn btn-dark" onClick={() => { handleDelete(index) }}>Delete</button></li>
						)


					}):
				


				<p> No hay tareas aun </p>
}

			   </ul>

		   </div>
	
		
	

			)
		}
	

export default Home;