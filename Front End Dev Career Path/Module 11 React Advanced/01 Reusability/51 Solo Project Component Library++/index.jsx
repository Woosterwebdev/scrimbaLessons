import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import TestimonialWithImg from "./components/TestimonialWithImg/index"

function App() {
  return (
    <TestimonialWithImg imgSrc="mayAndersons">
      <TestimonialWithImg.Quote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </TestimonialWithImg.Quote>
      <TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />
    </TestimonialWithImg>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/*
      <Testimonial.Logo logo="logo" />
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