import React, { Component } from 'react'
import CreateInput from './CreateInput'
import TodoList from './TodoList'

class App extends Component {
  id = 1

  state = {
    listData: [
      {
        id: 0,
        text: 'asd'
      }
    ]
  }

  pushData(data) {
    let list = this.state.listData.slice()
    list.push({
      id: this.id++,
      text: data.text
    })
    this.setState({
      listData: list
    })
  }

  render() {
    return (
      <div className="App">
        <CreateInput pushData={this.pushData.bind(this)}/>
        <TodoList list={this.state.listData}/>
      </div>
    )
  }
}

export default App;
