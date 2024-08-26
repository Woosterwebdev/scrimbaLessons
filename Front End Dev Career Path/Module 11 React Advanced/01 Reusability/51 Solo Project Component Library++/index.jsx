import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import TestimonialWithImg from "./components/TestimonialWithImg/index"
import Testimonial from "./components/Testimonial/index"

function App() {
  return (
    <>
      <Header />
      <section>
        <h2>Badges</h2>
          <h3>Square</h3>
            <div className="badge-examples">
              <Badge style="square" variant="success">Success</Badge>
              <Badge style="square" variant="warning">Warning</Badge>
              <Badge style="square" variant="danger">Danger</Badge>
              <Badge style="square" variant="primary">Primary</Badge>
              <Badge style="square" variant="indigo">Indigo</Badge>
              <Badge style="square" variant="purple">Purple</Badge>
              <Badge style="square" variant="pink">Pink</Badge>
            </div>
          <h3>Pill</h3>
            <div className="badge-examples">
              <Badge style="pill" variant="success">Success</Badge>
              <Badge style="pill" variant="warning">Warning</Badge>
              <Badge style="pill" variant="danger">Danger</Badge>
              <Badge style="pill" variant="primary">Primary</Badge>
              <Badge style="pill" variant="indigo">Indigo</Badge>
              <Badge style="pill" variant="purple">Purple</Badge>
              <Badge style="pill" variant="pink">Pink</Badge>
            </div>
          <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`<Badge style="pill" variant="success">Success</Badge>`}</code></p>
            </div>
      </section>
      <section>
        <h2>Banners</h2>
          <div className="banner-examples">
            <Banner variant="success">
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
            </Banner>
            <Banner variant="warning">
              <Banner.Title>Warning!</Banner.Title>
              <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
            </Banner>
            <Banner variant="danger">
              <Banner.Title>Danger!</Banner.Title>
              <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
            </Banner>
            <Banner variant="primary">
              <Banner.Title>Primary</Banner.Title>
              <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
            </Banner>
          </div>
          <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`<Banner variant="primary">`}</code></p>
              <p><code>{`<Banner.Title>Primary</Banner.Title>`}</code></p>
              <p><code>{`<Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>`}</code></p>
              <p><code>{`</Banner>`}</code></p>
            </div>
      </section>
      <section>
        <h2>Cards</h2>
      </section>
      <footer>
        <p>&copy; 2024</p>
      </footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/*
      <header>
        <h1>Wooster's React Component Library</h1>
      </header>
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
    <TestimonialWithImg imgSrc="mayAndersons">
      <TestimonialWithImg.Quote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </TestimonialWithImg.Quote>
      <TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />
    </TestimonialWithImg>
    ***
      <Testimonial logo="logo">
        <Testimonial.Quote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </Testimonial.Quote>
        <Testimonial.Author author="May Andersons" role="Workcation, CTO" />
      </Testimonial>
*/