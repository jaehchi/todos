import React, { Component } from 'react';
import axios from 'axios';
import Pending from './Pending';
import Progress from './Progress';
import Completed from './Completed';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos : [],
      entry : ''
    }

  }  

  componentDidMount() {
    axios.get('/api/findAllTodos')
      .then( todos => {
        this.setState({
          todos: todos.data
        });
      })
      .catch( err => {
        console.log(err);
      })
  }

  onChange (e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();

    const payload = {
      entry: this.state.entry
    }

    axios.post('/api/createTodo', payload)
      .then( todo => {
        this.state.todos.push(todo.data);

        this.setState({
          todos : this.state.todos
        })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render () {

    return (
      <div>
        <h2>Todo List</h2>
          <form >
              <div className="entry">
                <label htmlFor="Add a Todo"></label>
                  <div>
                    <input 
                      type="text"
                      name="entry"
                      placeholder="Add a todo!"
                      onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.onSubmit.bind(this)}>Add</button>
                  </div>
              </div>
            </form>

            <br/><br/>

            { this.state.todos.length ? 
              (
                <ul>
                  {
                    this.state.todos.map( todo => { 
                      return ( <li>{todo.entry}</li> );
                    })
                  }
                </ul>
              ) : (
                <div>There are no todos yet!</div>
              )
            }
        {/* < Pending />
        < InProgress />
        < Completed /> */}
      </div>
    )
  }

};

export default App;