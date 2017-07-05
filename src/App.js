import React, { Component } from 'react'
import CreateInput from './CreateInput'
import TodoList from './TodoList'

class App extends Component {
  id = 1

  state = {
    listData: [],
    editIndex: null,
    editData: null
  }

  pushData(data) {
    let list = this.state.listData.slice()
    if (this.state.editData) {
      Object.assign(list[this.state.editIndex], data)
    } else {
      list.push({
        id: this.id++,
        text: data.text
      })
    }
    this.setState({
      listData: list,
      editData: null,
      editIndex: null
    })
  }

  deleteData(index) {
    let list = this.state.listData.slice()
    list.splice(index, 1)
    this.setState({
      listData: list
    })
  }

  dataEdit(index) {
    this.setState({
      editData: this.state.listData[index],
      editIndex: index
    })
  }

  render() {
    return (
      <div className="App">
        <CreateInput pushData={this.pushData.bind(this)} editData={this.state.editData}/>
        <TodoList 
          list={this.state.listData} 
          deleteData={this.deleteData.bind(this)} 
          dataEdit={this.dataEdit.bind(this)}
          />
      </div>
    )
  }
}

export default App;
