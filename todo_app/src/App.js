import React , {useState} from 'react';
import './App.css';
import { Button , FormControl , InputLabel , Input } from '@material-ui/core';

function App() {
  const [todo, setTodo] = useState(['hello world this is first todo' , 'second todo hear' , 'oneother todo add in todo']);
  const [input , setInput] = useState('');

   const addTodo =(event)=>{
     console.log('its woking to find the way');
     event.preventDefault();  
     setTodo([...todo , input])
     setInput('');
   }

  return (
    <div className="App">
      <h1>Hello world🚀</h1>
      {/* <form action=""> */}
      {/* <input  /> */}
      
      <FormControl>
      <InputLabel>Write a Todo Notes</InputLabel>
      <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTodo}>
           Add Todo
      </Button>
     
      {/* </form> */}


      <ul>
        {todo.map(todos=> (<li>{todos}</li>))}
        {/* <li>{todo[1]}</li> */}
      </ul>
    </div>
  );
}

export default App;
