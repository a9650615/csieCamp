import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

export default class CreateInput extends Component {
  state = {
    text: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editData) {
      this.setState({
        text: nextProps.editData.text
      })
    }
  }

  addTodo(e) {
    if (e.keyCode === 13 && this.state.text !== '') {
      this.props.pushData(this.state)
      this.clear()
    }
  }

  changText(e) {
    this.setState({
      text: e.target.value
    })
  }

  clear() {
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <TextField
       value={this.state.text}
       hintText={this.props.editData?"輸入修改事項":"輸入新增事項"}
       floatingLabelText={this.props.editData?"修改事項":"新增事項"}
       onChange={this.changText.bind(this)}
       onKeyDown={this.addTodo.bind(this)}
       />
    )
  }
}