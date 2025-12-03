import React from "react";

function InlineStyle() {

    const titleStyle = {
     display: 'flex', 
     height: '10px', 
     backgroundColor: 'lightblue'
    }

    return(
        <>
          <div style={titleStyle}>
            <h1 style={{fontSize: '18px', fontWeight: 'bold' , color: 'black'}}>Welcome to My App</h1>
            <p style={{fontSize: '12px', color: 'black'}}>This is a simple component with styles.</p>
          </div>
        </>
    )
}

export default InlineStyle;