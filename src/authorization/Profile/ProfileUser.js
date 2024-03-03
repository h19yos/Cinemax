import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import { FaEdit, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import avatarImage from './profile-photo.jpg';

export default function PersonalProfile() {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <section className="vh-100" style={{ backgroundColor: '#000000' }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="6" className="mb-4 mb-lg-0">
            <Card className="mb-3" style={{ borderRadius: '.5rem', backgroundColor: '#1c1c1c' }}>
              <Row className="g-0">
                <Col
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem',
                  }}
                >
                  <CardImg
                    src={avatarImage}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: '125px' }}
                    fluid
                  />
                  <CardTitle tag="h5">{userEmail}</CardTitle>
                  <CardText>Web Designer</CardText>
                  <FaEdit className="mb-5" />
                </Col>
                <Col md="8">
                  <CardBody className="p-4">
                    <CardTitle tag="h6">Information</CardTitle>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col sm="6" className="mb-3">
                        <CardTitle tag="h6">Email</CardTitle>
                        <CardText className="text-muted">{userEmail}</CardText>
                      </Col>
                      <Col sm="6" className="mb-3">
                        <CardTitle tag="h6">Phone</CardTitle>
                        <CardText className="text-muted">+7-777-777-77-77</CardText>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-start">
                      <a href="#!" className="me-3"><FaFacebook size="lg" /></a>
                      <a href="#!" className="me-3"><FaTwitter size="lg" /></a>
                      <a href="#!" className="me-3"><FaInstagram size="lg" /></a>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
