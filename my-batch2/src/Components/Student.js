import React from "react";

function Student(props) {
    return(
        <>
         <h1>Your Name</h1>
         <p>{props.studentData.name}</p>
          <p>{props.studentData.age}</p>
          <p>{props.studentData.score}</p>
        </>
    )
}

export default Student;