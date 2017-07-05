import React, { Component } from 'react'
import CreateInput from './CreateInput'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateInput />
        <TodoList />
      </div>
    )
  }
}

export default App;
