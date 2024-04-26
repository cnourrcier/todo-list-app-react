import React from 'react';

// Stats component displaying statistics about the task list
const Stats = ({ todoList }) => {
    // Counting the number of tasks in the todoList
    let countList = todoList.length;
    return (
        // Div for displaying stats
        <div className="stats">
            {/* Paragraph displaying the number of tasks in the list */}
            <p className='notify'>
                {/* Conditional rendering based on the number of tasks */}
                {countList === 0 ? 'You got everything!' : `You have ${countList} items on your list.`}
            </p>
        </div>
    )
}

export default Stats;
