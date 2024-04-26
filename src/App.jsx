import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';

function App() {
  // State hook to manage the list of tasks
  const [todoList, setTodoList] = useState([]);

  // Function to add a new task to the list
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    // Updating the todoList state with the new task
    setTodoList([...todoList, newTask]);
  };

  // Function to delete a task from the list
  function deleteTask(deleteTaskName) {
    // Filtering out the task to be deleted from the todoList
    setTodoList(todoList.filter(task => task.taskName !== deleteTaskName));
  };

  // Function to toggle the checked status of a task
  function toggleCheck(taskName) {
    setTodoList((prevTodoList) =>
      // Updating the checked status of the specified task
      prevTodoList.map(
        (task) =>
          task.taskName === taskName
            ? { ...task, checked: !task.checked }
            : task
      )
    );
  };

  return (
    <>
      <div className='container'>
        <h1>Task Master</h1>

        {/* Component for adding new tasks */}
        <TaskInput addTask={addTask} />

        <div className="todoList">
          <span>To do</span>
          {/* Rendering the list of tasks */}
          <ul className="list-items">
            {todoList.map(
              (task, key) => (
                <TaskItem
                  task={task}
                  key={key}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              ))}
          </ul>
          {/* Displaying a message when there are no tasks */}
          {todoList.length === 0 ? (
            <p className='notify'>You are done!</p>
          ) : null}
        </div>
      </div>
      {/* Component to display statistics about the task list */}
      <Stats todoList={todoList} />
    </>
  );
}

export default App;







