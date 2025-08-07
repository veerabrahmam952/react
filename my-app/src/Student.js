import React from 'react';

function Student({name, classText, grade, counter}) {
    return (
        <>
        <p>Name: {name}</p>
        <p>Class: {classText}</p>
        <p>Grade: {grade}</p>
        <p>counter: {counter}</p>
        </>
    )
}

//Props Example

// function Student(props) {
//     return (
//         <>
//         <p>Name: {props.name}</p>
//         <p>Class: {props.classText}</p>
//         <p>Grade: {props.grade}</p>
//         </>
//     )
// }

export default Student;