import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(newTask, "task geldi...");
    console.log(task, date);
    addNewTask(newTask);
    setTask(" ");
    setDate("");
  };

  const url = "https://6351820e3e9fa1244e6084b7.mockapi.io/api/tasks";
  const addNewTask = async (newTask) => {
    try {
      const list = await axios.post(url, newTask);
      console.log(list);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            value={task}
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="success w-100 fs-4" type="submit">
          Save Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
