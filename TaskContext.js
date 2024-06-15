import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState({});

    const addNewtask = (task) => {
        setTaskList([...taskList, { ...task, createdDate: new Date() }]);
    };

    return (
        <TaskContext.Provider value={{ taskList, addNewtask }}>
            {children}
        </TaskContext.Provider>
    )
};

export { TaskProvider };
export default TaskContext;

