import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {


	// - breaks in the ToDoItem tag
	
	// when using i as a parameter i will pull the index number of each item in the array (or really i can be anything as long as it is the second argument)
	render() {
		return (
			<section className="main">
				<ul className="todo-list">
					{this.props.todos.map( (todo, i) => <ToDoItem key={todo.id} id={todo.id} isCompleted={todo.completed} text={todo.title} destroyOne={this.props.destroyOne(i)} toggleTodo={this.props.toggleTodo(i)}/> )}
				</ul>
			</section>

	)}
}
export default ToDoList;