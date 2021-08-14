import React, { useState , useEffect} from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads , we need to listen to the database and fetch new todos as they get added/remove
   useEffect(() => {
    //this code here... fires when the app loads 
    db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot =>{
      setTodo(snapshot.docs.map(doc => doc.data().todo)) 
    })
   }, [])
  // const TimeStamp = ;
  const addTodo = (event) => {
    // console.log("its woking to find the way");
    event.preventDefault();
    db.collection('todos').add({
     todo : input,
     timestamp : firebase.firestore.FieldValue.serverTimestamp()

    });
    // setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>ToDO Application☑</h1>
      <FormControl>
        <InputLabel>Write a Todo Notes</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </Button>

      {/* </form> */}

      <ul>
        {todo.map((todos) => (
          <Todo  text={todos} />
        ))}
        {/* <li>{todo[1]}</li> */}
      </ul>
    </div>
  );
}

export default App;
