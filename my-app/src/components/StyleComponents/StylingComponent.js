import React from 'react';
import './StylingComponent.css';

function StylingComponent() {
   
  return (
    <div className="container">
      <h1 className="title">Welcome to My App</h1>
      <p className="description">This is a simple component with styles.</p>
    </div>
  );
}

function InlineStylingComponent() {
   //Inline Styling
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'lightblue',
    };

    const titleStyle = {
        color: 'darkblue',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const descriptionStyle = {
        color: 'darkgray',
        fontSize: '18px',
    };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to My App</h1>
      <p style={descriptionStyle}>This is a simple component with styles.</p>
    </div>
  );
}

export {StylingComponent, InlineStylingComponent};