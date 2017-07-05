import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper'

export default class TodoList extends Component {
  
  lists = this.props.list.map((val) => {
    return (
      <ListItem key={val.id}>
        {val.text}
      </ListItem>
    )
  })

	render() {
    return (
      <Paper>
        <List>
          {this.lists}
        </List>
      </Paper>
    )
  }
}
