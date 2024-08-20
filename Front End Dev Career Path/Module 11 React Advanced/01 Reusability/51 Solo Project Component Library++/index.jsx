import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"

function App() {
  return (
    <Badge style="pill" variant="pink">Badge</Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
