import React, { useState } from 'react';

// TaskInput component responsible for adding new tasks
const TaskInput = ({ addTask }) => {
    // State hook to manage the input value
    const [task, setTask] = useState('');

    // Function to update the task state based on input value
    function handleInputValue(event) {
        setTask(event.target.value);
    }

    // Function to handle adding a new task
    function handleAddTask(event) {
        // Preventing default form submission behavior
        event.preventDefault();
        // Checking if the task is empty or contains only whitespace
        if (task.trim() === '') return;
        // Calling the addTask function passed as a prop with the new task
        addTask(task);
        // Clearing the input field after adding the task
        setTask('');
    }

    return (
        // Form for adding new tasks
        <form className='inputField' onSubmit={handleAddTask}>
            {/* Input field for entering task name */}
            <input
                type="text"
                value={task}
                placeholder='Add Item'
                onChange={handleInputValue}
            />
            {/* Button to submit the new task */}
            <button>+</button>
        </form>
    );
};

export default TaskInput;
