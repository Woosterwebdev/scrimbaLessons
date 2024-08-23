import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import Testimonial from "./components/Testimonial/index"

function App() {
  return (
    <Testimonial>
      <Testimonial.Image><img src="./public/mayAndersons.png" /></Testimonial.Image>
      <Testimonial.Logo><img src="./public/quote.png" /></Testimonial.Logo>
      <Testimonial.Quote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonial.Quote>
      <Testimonial.Author>May Andersons</Testimonial.Author>
      <Testimonial.Role>Workcation, CTO</Testimonial.Role>
    </Testimonial>
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
    <div className="card-section">
      <Card>
        <Card.Icon><img className="card-icon" src="./public/cloudUpload.png" /></Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
      </Card>
    </div>
    ***
*/