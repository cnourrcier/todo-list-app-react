## todo-list-app-react

todo-list-app-react is a simple React app for managing your tasks. It allows you to add, delete, and mark tasks as completed.

## Features

- **Add new tasks:** Enter a task name in the input field and click the "+" button to add it to your list.
- **Delete tasks:** Click on the delete icon next to a task to remove it from the list.
- **Mark tasks as completed:** Check the checkbox next to a task to mark it as completed. The task name will be striked through to indicate completion.
- **View task statistics:** See the total number of tasks in your list.

## Installation

To run todo-list-app-react locally on your machine, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies by running `npm install`.
Start the development server by running `npm run dev`.
Open your browser and navigate to the URL provided by Vite in the terminal to view the application.

## Components

### App
The `App` component serves as the main container for the application. It manages the state of the todoList and includes the components for adding tasks (`TaskInput`), displaying individual tasks (`TaskItem`), and showing task statistics (`Stats`).

### TaskInput
The TaskInput component provides an input field for adding new tasks. It receives a prop addTask to handle adding tasks to the todoList.

### TaskItem
The `TaskItem` component represents an individual task in the todoList. It displays the task name, checkbox for completion status, and a delete icon. It receives props for the task object, deleteTask function, and toggleCheck function to handle task operations.

### Stats
The `Stats` component displays statistics about the task list, such as the total number of tasks. It receives a prop `todoList` containing the array of tasks.

## Usage

1. Enter a task name in the input field and press Enter or click the "+" button to add it to your list.
2. Click on the checkbox next to a task to mark it as completed.
3. Click on the delete icon to remove a task from the list.
4. View task statistics to see the total number of tasks in your list.

## Credits

This code is from an instructional tutorial on Youtube by @CodeInfoofficial.