import React from 'react';
import '../index.css';
import { Route, Link, Switch, withRouter  } from 'react-router-dom'
import { connect } from 'react-redux';
import ToDoList from './ToDoList';
import { addTodo, toggleToDo } from '../actions';

//DISPATCH is a prop that you inherit from connect

// first we have to import the connect
//using connect allows us to talk to the store in the provider

//when using functional components it will be "props.whatever"
//when using class components you will be using "this.props.whatever"
//reason = because


class App extends React.Component{
	state = {
		text: ''
	  }
	  handleOnChange = (event) => {
		  this.setState({
			  text: event.target.value
		  })
		
	  }
	  handleSubmit = (e) => {
		  //Take the value of the input and make it the title
		  //Then I need to take the new todo object and push it into the todos list
			e.preventDefault();
			this.props.dispatch(addTodo(this.state.text));
			
			this.setState({
				text: ''
			})
			//need to add newToDo to the todos list, by using spread operator and setState
		
			
		}
		//below is a function factory or curried function which creates more functions.
		toggleTodo = index => () => {
			const { todos } = this.state;
			this.props.dispatch(toggleToDo(index + 1));
			
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
		const { todos } = this.props;
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<form onSubmit={this.handleSubmit}>
						<input className="new-todo" onChange={this.handleOnChange} placeholder="What needs to be done?" value={this.state.text} autoFocus/>
					</form>
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
// if there is only one paramter you dont need parenthesis
// this is where you determine the name of the object key that you want to reference as a prop
const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

//react.component is a functional component which is a function therefore can be called on like a function.
export default withRouter(connect(mapStateToProps)(App));



