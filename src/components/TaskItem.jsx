import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

// TaskItem component responsible for displaying individual tasks
const TaskItem = ({ task, deleteTask, toggleCheck }) => {
    return (
        // List item representing an individual task
        <li className='items'>
            {/* Div containing task text and checkbox */}
            <div className="items-text">
                {/* Checkbox for task completion status */}
                <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)} />
                {/* Paragraph displaying task name, with styling for completed tasks */}
                <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
            </div>
            {/* Delete icon for removing the task */}
            <MdDeleteSweep className='delete-icon'
                onClick={() => deleteTask(task.taskName)} />
        </li>
    );
};

export default TaskItem;
