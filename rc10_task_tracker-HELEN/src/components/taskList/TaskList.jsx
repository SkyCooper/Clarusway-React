import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
    const deleteTask = async (id) => {
        const url = "https://6351820e3e9fa1244e6084b7.mockapi.io/api/tasks";

        try {
            await axios.delete(`${url}/${id}`);
        } catch (error) {
            console.log("Delete Error");
        }
        getTask();
    };

    return (
        <div>
            {task?.map((item) => {
                const { id, task, date } = item;
                return (
                    <div
                        key={id}
                        className="task-list mt-2 d-flex justify-content-between rounded-2 p-2"
                    >
                        <div>
                            <h4>{task}</h4>
                            <p>{date}</p>
                        </div>
                        <div>
                            <RiDeleteBack2Fill
                                onClick={() => deleteTask(id)}
                                style={{
                                    cursor: "pointer",
                                    marginRight: "20px",
                                    fontSize: "2rem",
                                    boxShadow: "2px 2px 2px #ECAB9E",
                                    color: "red",
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
