import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [color, setColor] = useState("red")
  const handleClick = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    const buttonColor = isOpen ? "red" : "green";
    setText(buttonText);
    setColor(buttonColor)
  };

  const url = "https://6351820e3e9fa1244e6084b7.mockapi.io/api/tasks";
  const [task, setTask] = useState([]);
  const getTask = async () => {
    try {
      const { data } = await axios(url);
      setTask(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      
      <Button style={{backgroundColor : `${color}`, border : "none"}} onClick={handleClick} variant="danger">
        {text}
      </Button>

      {isOpen && <TaskList />}
      <AddTask task = {task}/>
    </div>
  );
};

export default Home;
