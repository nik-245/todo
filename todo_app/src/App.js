import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState([
    "hello world this is first todo",
    "second todo hear",
    "oneother todo add in todo",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    console.log("its woking to find the way");
    event.preventDefault();
    setTodo([...todo, input]);
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
          <Todo  text={todos}/>
        ))}
        {/* <li>{todo[1]}</li> */}
      </ul>
    </div>
  );
}

export default App;
