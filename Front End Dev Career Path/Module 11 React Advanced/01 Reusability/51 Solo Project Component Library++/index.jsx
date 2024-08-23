import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"

function App() {
  return (
    <Card>
      <Card.Icon><img className="card-icon" src="./public/cloudUpload.png" /></Card.Icon>
      <Card.Title>Easy Deployment</Card.Title>
      <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
    </Card>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/*
    <Badge style="square" variant="">Badge</Badge>
    ***
    <Banner style="" variant="primary">
      <Banner.Title>Congratulations!</Banner.Title>
      <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
    </Banner>
    ***
*/