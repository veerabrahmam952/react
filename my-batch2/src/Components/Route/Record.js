import React from "react";
import { useParams } from "react-router-dom";

function Record() {
    const param = useParams()
    console.log(param);
    return(
        <>
        {param.id ? <p>Record {param.id}</p> : <p>No record found</p>}
        
        </>
    )
}

export default Record;