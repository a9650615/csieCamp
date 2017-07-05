import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

export default class CreateInput extends Component {
  render() {
    return (
      <TextField
       hintText="輸入新增事項"
       floatingLabelText="新增事項"
       />
    )
  }
}