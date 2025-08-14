import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeNew() {
  return (
    <div>
      <Link to="/member">Navigate to Member Page</Link>
      <br />
      <a href="https://stackoverflow.com/">Go to Member</a>
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default WelcomeNew;