import React from 'react';

function ListRendering() {
    const productItems = ['Apple', 'Oppo', 'LG'];
    return(
        <ul>
            {productItems.map((item, index)=> (
                <>
                  <OnlyListElements key={index} value={item} />
                </>
            ))}
        </ul>
    )
}

function OnlyListElements({value}) {
    return (
        <>
        <li>{value}</li>
        </>
    )
}

function TodoList() {
    const toDoItems = [
        {id: 1, task: 'Design Screen'},
        {id: 2, task: 'Develop Screen'},
        {id: 3, task: 'Deploy Application'},
    ]
    return(
        <>
        {toDoItems.length > 0 ? <ul>
            {toDoItems.map(item => (
                (
                <li key={item.id}>{item.task}</li>
            )
            ))}
        </ul>: <p>No tasks found</p>}
        
        </>
        
    )
}

export {ListRendering, TodoList};
