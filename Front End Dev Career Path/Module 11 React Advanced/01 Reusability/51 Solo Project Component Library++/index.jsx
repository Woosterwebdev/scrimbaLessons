import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./DocsComponents/Header"
import Badges from "./DocsComponents/Badges"
import Banners from "./DocsComponents/Banners"
import Buttons from "./DocsComponents/Buttons"
import Cards from "./DocsComponents/Cards"
import TestimonialWithImage from "./DocsComponents/TestimonialWithImage"
import TestimonialWithLogo from "./DocsComponents/TestimonialWithLogo"
import Menu from "./DocsComponents/Menu"
import Footer from "./DocsComponents/Footer"



function App() {
  return (
    <>
      <Header />
      <Badges />
      <Banners />
      <Buttons />
      <Cards />
      <TestimonialWithImage />
      <TestimonialWithLogo />
      <Menu />
      <Footer />
    </>
  )
}
      
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
      /*
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
              <p><code>{`import Badge from "./components/Badge/Badge"`}</code></p>
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
              <p><code>{`import Banner from "./components/Banner/index"`}</code></p>
              <p><code>{`<Banner variant="primary">`}</code></p>
              <p><code>{`<Banner.Title>Primary</Banner.Title>`}</code></p>
              <p><code>{`<Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>`}</code></p>
              <p><code>{`</Banner>`}</code></p>
            </div>
      </section>
      <section>
        <h2>Button</h2>
        <div>
          <Button size="lg" className="green">Log in with Google</Button>
        </div>
        <h3>Syntax</h3>
        <div className="syntax">
          <p><code>{`import Button from "./components/Button/Button"`}</code></p>
          <p><code>{`<Button size="lg" className="green">Log in with Google</Button>`}</code></p>
        </div>
      </section>
      <section>
        <h2>Cards</h2>
          <div className="card-section">
            <Card>
              <Card.Icon cardIcon="cloudUpload" />
              <Card.Title>Easy Deployment</Card.Title>
              <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
            </Card>
            <Card>
              <Card.Icon cardIcon="cloudUpload" />
              <Card.Title>Easy Deployment</Card.Title>
              <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
            </Card>
            <Card>
              <Card.Icon cardIcon="cloudUpload" />
              <Card.Title>Easy Deployment</Card.Title>
              <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
            </Card>
          </div>
          <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`import Card from "./components/Card/index"`}</code></p>
              <p><code>{`<Card>`}</code></p>
              <p><code>{`<Card.Icon><img className="card-icon" src="./public/cloudUpload.png" /></Card.Icon>`}</code></p>
              <p><code>{`<Card.Title>Easy Deployment</Card.Title>`}</code></p>
              <p><code>{`<Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>`}</code></p>
              <p><code>{`</Card>`}</code></p>
            </div>
      </section>
      <section>
        <h2>Testimonial with image</h2>
        <div className="testimonial-with-img-container">
          <TestimonialWithImg imgSrc="mayAndersons">
            <TestimonialWithImg.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </TestimonialWithImg.Quote>
            <TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />
          </TestimonialWithImg>
        </div>
        <h3>Syntax</h3>
          <div className="syntax">
            <p><code>{`import TestimonialWithImg from "./components/TestimonialWithImg/index"`}</code></p>
            <p><code>{`<TestimonialWithImg imgSrc="mayAndersons">`}</code></p>
            <p><code>{`<TestimonialWithImg.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </TestimonialWithImg.Quote>`}</code></p>
            <p><code>{`<TestimonialWithImg.Author author="May Andersons" role="Workcation, CTO" />`}</code></p>
            <p><code>{`</TestimonialWithImg>`}</code></p>
          </div>
      </section>
      <section>
        <h2>Testimonial with logo</h2>
        <div>
          <Testimonial logo="logo">
            <Testimonial.Quote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </Testimonial.Quote>
            <Testimonial.Author author="May Andersons" role="Workcation, CTO" />
          </Testimonial>
        </div>
        <h3>Syntax</h3>
        <div className="syntax">
          <p><code>{`import Testimonial from "./components/Testimonial/index"`}</code></p>
          <p><code>{`<Testimonial logo="logo">`}</code></p>
          <p><code>{`<Testimonial.Quote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
              </Testimonial.Quote>`}</code></p>
          <p><code>{`<Testimonial.Author author="May Andersons" role="Workcation, CTO" />`}</code></p>
          <p><code>{`</Testimonial>`}</code></p>
        </div>
      </section>
      <section>
        <h2>Menu</h2>
        <div>
          <Menu>
            <Menu.Button>Sports</Menu.Button>
            <Menu.Dropdown>
              {sports.map(sport => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
        <h3>Syntax</h3>
        <div className="syntax">
          <p><code>{`import Menu from "./components/Menu/index"`}</code></p>
          <p><code>{`<Menu>`}</code></p>
          <p><code>{`<Menu.Button>Sports</Menu.Button>`}</code></p>
          <p><code>{`<Menu.Dropdown> {sports.map(sport => (`}</code></p>
          <p><code>{`<Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            `}</code></p>
          <p><code>{`</Menu.Dropdown>`}</code></p>
          <p><code>{`</Menu>`}</code></p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Christopher Wooster</p>
      </footer>
    </>
  )
}

*/

