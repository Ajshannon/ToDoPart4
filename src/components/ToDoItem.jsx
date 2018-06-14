import React from 'react'


const ToDoItem = (props) => {
	let complete = () => {
		if (props.isCompleted) {
			return "completed"
		} else {
			return null
		}
	}
	let checked = () => {
		if (props.isCompleted) {
			return true
		} else {
			return null
		}
	}

    return(

		
        <li className={complete()} >
			<div className="view">
				<input className="toggle" type="checkbox"  onChange={props.toggleTodo} defaultChecked={checked()}/>
				<label>{props.text}</label>
				<button className="destroy" onClick={props.destroyOne}></button>
			</div>
		</li>
    );
}
export default ToDoItem;