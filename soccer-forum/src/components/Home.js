import React, { Component } from "react";
import {
  Carousel,
  Jumbotron,
  Container,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
// import "bootswatch/dist/Minty/bootstrap.min.css";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1542050939822-419d5716b8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 2"
  },
  {
    src:
      "https://images.unsplash.com/photo-1490323522928-9bfab6309902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 3"
  },
  {
    src:
      "https://images.unsplash.com/photo-1505988880760-fcbf026bb1e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 5"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  onSubmit = () => {
    this.props.history.push("/chat");
  };

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          // style={{ width: "50%", height: "10%" }}
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{ width: "60%", height: "10%" }}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <div>
          <Jumbotron fluid color="primary">
            <Container fluid>
              <h4 className="display-5">Welcome to the Chat room!</h4>
            </Container>
          </Jumbotron>
        </div>

        <div>
          <Row>
            <Form
              style={{
                marginLeft: "150px",
                marginRight: "340px",
                marginTop: "50px"
              }}
            >
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="enter your password"
                />
              </FormGroup>
              <Button onClick={this.onSubmit}>Submit</Button>
            </Form>
            <Col xs={6}>
              <Carousel
                style={{ marginRight: "99px" }}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>

              {/* <Form style={{ marginalign: "inline" }}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
