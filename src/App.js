import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from '@mui/material';
import './App.css';

// Importing components
import Parent from './Components/Parent';
import Profile from './Components/User/Profile';

// Main App component



function App() {
  

  return (
    <Container className="mt-5">

      <Profile />
      <hr />

      <h1 className="text-success">ContextAPI example</h1>
      <div className="bg-info p-5">
        <div className="text-center">
          <Parent />
        </div>

        <p className="">
          This is example for using button with
          bootstrap styling
        </p>

        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Bootstrap button
        </a>
      </div>
    </Container>
  );
}

export default App;