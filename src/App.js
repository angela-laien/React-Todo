import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() { // Constructor with state
    // initialize component state
    super(); // this.state, this.setState, lifecycle methods
    this.state = {
      todos, // shorthand for todos: todos
      task: ''
    };
  }

  // Class methods to update state
  toggleCompleted = clickedItemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  //remove any todos that have been completed
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        item => item.completed === false
      )
    });
  }
  
  // add a new item to the todos state
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className="body">
        <div>
          <h1 className="title">To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
