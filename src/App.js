import React, { Component } from 'react'
import CreateInput from './CreateInput'
import TodoList from './TodoList'

class App extends Component {
  state = {
    listData: [
      {
        id: 1,
        text: 'asd'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <CreateInput />
        <TodoList list={this.state.listData}/>
      </div>
    )
  }
}

export default App;
