import React, { useState } from "react";
import './Todo.css';
import {Input,InputLabel,FormControl,List , ListItem, ListItemText, ListItemAvatar, Button, makeStyles, Paper,} from "@material-ui/core";
import db from "./firebase";
import { Modal } from "@material-ui/core";
// import { positions, width } from "@material-ui/system";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Todo = (props) => {
    const [open, setopen] = useState(false);
    const classes = useStyles();
    const [input, setinput] = useState('');

       const updateTodo = ()=>{
        //updat the todo with the new  input text  
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        },{merge :true})
        setopen(false);
        setinput('');
       };

  return (
    <div>
      <Modal
       open={open}
       onclose={e => setopen(false)} >
           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       <div style={{padding:'100px', marginTop:'100vh'}} className={classes.paper}>
       <FormControl style={{margin:'-10px 10px 5px 10px',padding:'5px'}}>
        <InputLabel>update your todo</InputLabel>
        <Input
        placeholder={props.todo.todo}
          type="text"
          value={input}
          onChange={(event) => setinput(event.target.value)}
        />
      </FormControl>
    <Button disabled={!input} variant="contained" color="primary" style={{margin : '10px'}} onClick={updateTodo}>Update</Button>
       </div>
       </div>
      </Modal>  
      <List className='todo__list'>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="todo" />
        </ListItem>
        <Button  variant="contained" 
        color="primary" style={{margin : '10px'}} onClick={e => setopen(true)}>Edit</Button>
        {/* <button variant="contained" >Delete ME</button> */}
        <Button 
        
        variant="contained" 
        color="primary"
        onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}}>
        Delete Todo
       </Button>
       <hr style={{color:'blue'}}/>
      </List>
     
    </div>
  );
};

export default Todo;
