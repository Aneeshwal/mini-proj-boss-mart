import {
  Box,
  Column,
  FooterLink,
  Social,
  OuterCardStyle,
  SubContainerStyle,
  SubInputStyle,
  SubButtonStyle,
} from "./footerstyle";
import { Col, Container, Row } from "react-bootstrap";
//import SubscribeCard from "react-subscribe-card";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
import "./style.css";


function Footer() {

  const mailchimpURL = `[Your Mailchimp subscription URL]`;

  return (
    <>
    <div id="footer">
    <Box>
      <Container>
        <Row>
          <Col>
            <div>
              <h6 className="mb-4">SIGN UP FOR OUR NEWSLETTER</h6>
              {/* <SubscribeCard
                mailchimpURL={mailchimpURL}
                outerCardStyle={OuterCardStyle}
                subContainerStyle={SubContainerStyle}
                subInputStyle={SubInputStyle}
                subButtonStyle={SubButtonStyle}
              /> */}
              <FooterLink href="/">
                <Social className="me-3">
                  <Facebook></Facebook>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Instagram></Instagram>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Twitter></Twitter>
                </Social>
              </FooterLink>
            </div>
          </Col>
          <Col>
            <h6 className="mb-4">Pages</h6>
            <Column>

              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/">About</FooterLink>
              <FooterLink href="/">Accessories</FooterLink>
              <FooterLink href="/footer">Contact</FooterLink>
            </Column>
            <Column>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
            </Column>
          </Col>
          <Col>
            <h6 className="mb-4">CONTACT US</h6>
            <Column>
              <FooterLink>
                <GeoAltFill className="me-2"></GeoAltFill>
                Adi Shankara Institute of Engineering And Technology, Vidya Bharathi Nagar , Mattoor, Kalady, Ernakulam District, Kerala State Pin: 683574
              </FooterLink>
              <FooterLink>
                <EnvelopeFill className="me-2"></EnvelopeFill>
                aneeshwal10@gmail.com
              </FooterLink>
              <FooterLink>
                <PhoneFill className="me-2"></PhoneFill>
                +91 99953 90012
              </FooterLink>
            </Column>
          </Col>
        </Row>
      </Container>
    </Box>
    </div></>
  );
}

export default Footer;
