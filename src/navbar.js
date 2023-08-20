import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
// import logo from "./images/logo4.jpg";
import Service from "./service"
import "./style.css";

const NavBar = (props) => {

  
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);
    
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = () => {
      // hiddenFileInput.current.click();
      window.location.href = 'http://localhost:3000/sell';
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      // props.handleFile(fileUploaded);

      // let upload={
      //   image:fileUploaded
      // };
    
      // Service.saveImage(upload).then(()=>{
      //   window.location.href = 'http://localhost:3000';
      // })
    };

  return (
    <Navbar expand="lg" bg="white" className="boxShadaw p-3">
      <Container>
        <Navbar.Brand href="/">
          {/* <img alt="logo" src={logo} /> */}
          <h1>ⒷⓄⓈⓈ ⓂⒶⓇⓉ</h1>
        </Navbar.Brand>
        <div className="searchBar">
          <input className="search" id="search" type="search" placeholder="search for your vegetables"></input>
        </div>
        <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}>
          <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
          clipRule="evenodd"
        />
        </svg>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            {/* <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link> */}
            {/* <Nav.Link href="#link">Accessories</Nav.Link> */}
            <Nav.Link href="#footer">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <button onClick={handleClick}>Sell</button>
            <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
