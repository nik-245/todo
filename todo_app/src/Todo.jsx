import React from "react";
import './Todo.css';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon,
} from "@material-ui/core";

const Todo = (props) => {
  return (
    <div>
      <List className='todo__list'>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
          <ListItemText primary={props.text} secondary="todo" />
        </ListItem>
      </List>
        
    </div>
  );
};

export default Todo;
