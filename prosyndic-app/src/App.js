import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>
          This is a simple React application. Let's start building something awesome!
        </p>
        <button onClick={() => alert('Hello, World!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
