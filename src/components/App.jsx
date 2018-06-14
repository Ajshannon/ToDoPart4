import React from 'react';
import '../index.css';
import todos from '../todos.json';
import { Route, Link, Switch  } from 'react-router-dom'
import ToDoList from './ToDoList';
import Router from 'react-router-dom/Router';

//when using functional components it will be "props.whatever"
//when using class components you will be using "this.props.whatever"
//reason = because


class App extends React.Component{
	state = {
		todos: todos.slice()
	  }
	
	  handleKeyPress = (event) => {
		  //Take the value of the input and make it the title
		  //Then I need to take the new todo object and push it into the todos list
		  const { todos } = this.state;
		  if(event.key === "Enter"){
			  console.log(event.target.value)
			  let newToDo = {
				  userId: 1,
				  id: (todos.length + 1),
				  title: event.target.value,
				  completed: false
				}
				event.target.value = ""
				
				this.setState({
					todos: [...todos, newToDo]
				})
				//need to add newToDo to the todos list, by using spread operator and setState
			}
			
		}
		//below is a function factory or curried function which creates more functions.
		toggleTodo = index => () => {
			const { todos } = this.state;
			
			this.setState({
				// If the todo we are iterating over has an id that matches the id we baked into the
				// event handler...
				todos: todos.map((todo, i) => index === i ? {
					// make a copy of the todo...
					...todo,
					// but change completed to be the opposite of what it was originally;
					completed: !todo.completed
					// otherwise, return the original dtodo, untouched
				} : todo)
			});
		}
		
		//step 3
		destroyOne = index => () => {
			const { todos } = this.state;
			this.setState({todos: todos.filter((item, i) => index !== i)});
			
		}
		
		//step 4 
		
		destroyAll = () => {
			const { todos } = this.state;
			this.setState({todos: todos.filter(item => item.completed === false)});
			
		}


		render() {
		const { todos } = this.state;
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<input className="new-todo" placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} autoFocus/>
				</header>
				<Switch>
					<Route
						exact path='/'
						render={(props) => <ToDoList {...props} todos={todos} toggleTodo={this.toggleTodo} destroyOne={this.destroyOne} />}
					/>
					<Route
						path='/active'
						render={(props) => <ToDoList {...props} todos={todos.filter(item => item.completed !== true )} toggleTodo={this.toggleTodo} destroyOne={this.destroyOne} />}
					/>
					<Route
						path='/completed'
						render={(props) => <ToDoList {...props} todos={todos.filter(item => item.completed !== false )} toggleTodo={this.toggleTodo} destroyOne={this.destroyOne} />}
					/>
				</Switch>
				<footer className="footer">
					<span className="todo-count"><strong>{todos.length}</strong> item(s) left</span>
					<ul className="filters">
						<li>
							<Link to="/">
							All
							</Link>
						</li>
						<li>
							<Link to="/active">
							Active
							</Link>
						</li>
						<li>
							<Link to="/completed">
							Completed
							</Link>
						</li>
					</ul>
					<button className="clear-completed" onClick={this.destroyAll}>Clear completed</button>
				</footer>
			</section>
		)
	}
 }
export default App;



