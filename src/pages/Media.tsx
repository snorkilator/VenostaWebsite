import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function Media() {
  return (
    <main>
      <Container className="justify-content-center">
        <p>
          Through Be and Become, youth have created these media projects. We
          offer
          <a href="">workshops</a>, <a href="">Jumpstart grants</a>, and
          equipment to help you with your creative projects. Please call use or
          look at our programs page to learn how we can help you
        </p>
        <h2 className="text-center">Podcasts</h2>
        <Row>
          <Col sm={5} className="Podcast description">
            <h3>Video Title</h3>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
          </Col>
          <Col sm={5}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1361164135&color=%23144ba7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Col>
        </Row>

        <h2 className="text-center">Videos</h2>
        <Row>
          <Col sm={5} className="video description">
            <h3 className="text-center">Video Title</h3>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
          </Col>
          <Col sm={5} className="map-responsive">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/SlLiCnQTDi8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <h2 className="text-center">Blog Posts</h2>
        <Row>
          <Col md={6}>
            <h4>Blog Title</h4>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type... <a href="">Read more</a>
            </p>
          </Col>
          <Col md={6}>
            <h4>Blog Title</h4>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type... <a href="">Read more</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>Blog Title</h4>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type... <a href="">Read more</a>
            </p>
          </Col>
          <Col md={6}>
            <h4>Blog Title</h4>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type... <a href="">Read more</a>
            </p>
          </Col>
        </Row>
        <h2 className="text-center">Photos</h2>
        <Row>
          <Col sm={6} md={4} lg={3}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UmgTB1SJYyFYUdkDVBMNRAHaE8%26pid%3DApi&f=1&ipt=695f632c241e1e6dad27052b5bf384d1df61cebbbccc92fd2171e60e4bd2b3f6&ipo=images"></img>
            <p>These are two happy people playing with blocks.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/group-of-diverse-culture-friends-walking-in-city-center-with-coffee-picture-id861387640"></img>
            <p>These are many happy people drinking coffee.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/happy-millennials-friends-jumping-outdoor-young-people-having-fun-picture-id981660478"></img>
            <p>These are many happy people jumping.</p>
          </Col>
          <Col >
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UmgTB1SJYyFYUdkDVBMNRAHaE8%26pid%3DApi&f=1&ipt=695f632c241e1e6dad27052b5bf384d1df61cebbbccc92fd2171e60e4bd2b3f6&ipo=images"></img>
            <p>These are two happy people playing with blocks.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/group-of-diverse-culture-friends-walking-in-city-center-with-coffee-picture-id861387640"></img>
            <p>These are many happy people drinking coffee.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/happy-millennials-friends-jumping-outdoor-young-people-having-fun-picture-id981660478"></img>
            <p>These are many happy people jumping.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UmgTB1SJYyFYUdkDVBMNRAHaE8%26pid%3DApi&f=1&ipt=695f632c241e1e6dad27052b5bf384d1df61cebbbccc92fd2171e60e4bd2b3f6&ipo=images"></img>
            <p>These are two happy people playing with blocks.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/group-of-diverse-culture-friends-walking-in-city-center-with-coffee-picture-id861387640"></img>
            <p>These are many happy people drinking coffee.</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <img src="https://media.istockphoto.com/photos/happy-millennials-friends-jumping-outdoor-young-people-having-fun-picture-id981660478"></img>
            <p>These are many happy people jumping.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
