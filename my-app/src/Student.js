import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Counter from './Counter.js';

function Student({name, classText, grade, counter}) {
    return (
        <>
        <Link to="counter/veera">Go to Counter</Link>
        <p>Name: {name}</p>
        <p>Class: {classText}</p>
        <p>Grade: {grade}</p>
        <p>counter: {counter}</p>
        <Routes>
            <Route path="/counter/:id/*" element={<Counter />} />
        </Routes>
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