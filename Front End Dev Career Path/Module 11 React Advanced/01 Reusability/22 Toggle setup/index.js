import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle"

function App() {
  
  /**
   * Challenge: Fix the broken parts! You'll know it's 
   * working when the star is displayed again.
   */
  
  return (
    <>
      <Toggle>
        <Star />
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
