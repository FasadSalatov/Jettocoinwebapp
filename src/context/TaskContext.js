// src/context/TaskContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasksVisible, setTasksVisible] = useState(true);

  useEffect(() => {
    const savedTasksVisibility = localStorage.getItem('tasksVisible');
    if (savedTasksVisibility !== null) {
      setTasksVisible(JSON.parse(savedTasksVisibility));
    }
  }, []);

  const handleHideTasks = () => {
    setTasksVisible(false);
    localStorage.setItem('tasksVisible', JSON.stringify(false));
  };

  return (
    <TaskContext.Provider value={{ tasksVisible, handleHideTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
