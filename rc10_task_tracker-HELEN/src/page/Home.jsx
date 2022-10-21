import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState("Hide Task Bar");
  const [color, setColor] = useState("green");
  const handleClick = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    const buttonColor = isOpen ? "red" : "green";
    setText(buttonText);
    setColor(buttonColor);
  };

  const url = "https://6351820e3e9fa1244e6084b7.mockapi.io/api/tasks";
  const [task, setTask] = useState([]);
  const getTask = async () => {
    try {
      const { data } = await axios(url);
      setTask(data);
      console.log(data);
    } catch (error) {
      console.log("API failed");
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        style={{ backgroundColor: `${color}`, border: "none" }}
        onClick={handleClick}
        variant="danger fs-4"
      >
        {text}
      </Button>

      {isOpen && <AddTask getTask={getTask} />}
      {isOpen && <TaskList task={task} getTask={getTask} />}
    </div>
  );
};

export default Home;
