import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Badge/Banner"

function App() {
  return (
    <Banner style="" variant="">
      <Banner.Title>
        Congratulations!
      </Banner.Title>
      <Banner.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner.Content>
    </Banner>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
