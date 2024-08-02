import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from "./Avatar"

function App() {
  return (
    <>
      <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar className= "avatar avatar-letters" >BZ</Avatar>
      <br />
      <Avatar className= "avatar avatar-icon" />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);