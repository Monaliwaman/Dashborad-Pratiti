import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer fixed-bottom">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © Pratiti Technologies</Col>
            <Col sm={6}>
              <div className="text-sm-right d-none d-sm-block">
                Crafting Digital Journeys Pratiti Technologies
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
