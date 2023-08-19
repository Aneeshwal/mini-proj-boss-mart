import React from "react";
import { useState } from "react";
// import SubBanner1 from "./images/SubBan1.jpg";
// import SubBanner2 from "./images/SubBan2.jpg";
// import SubBanner3 from "./images/SubBan3.jpg";
// import SubBanner4 from "./images/SubBan4.jpg";
// import SubBanner5 from "./images/SubBan5.jpg";
// import SubBanner6 from "./images/SubBan6.jpg";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { useDispatch, connect } from "react-redux";
import "./style.css"
// import "./Card.css";
// import Card from "./card";
import Card from "react-bootstrap/Card";
import NavBar from "./navbar";
// import { useEffect } from "react";
// import Carousel from "./react-multi-carousel";
// import ProductCardElement from "./utility";
// import { ProductsResponsive } from "./services/responsive";
// import { loadProducts } from "./redux/reducers/cart-actios";
import PropTypes from 'prop-types';

function Types() {

  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  const [file6, setFile6] = useState();

    function handleChange(e) {
      const{id} = e.target;
      if(id==="file1"){
        console.log(e.target.files);
        setFile1(URL.createObjectURL(e.target.files[0]));
      }
      if(id==="file2"){
        console.log(e.target.files);
        setFile2(URL.createObjectURL(e.target.files[0]));
      } 
      if(id==="file3"){
        console.log(e.target.files);
        setFile3(URL.createObjectURL(e.target.files[0]));
      } 
      if(id==="file4"){
        console.log(e.target.files);
        setFile4(URL.createObjectURL(e.target.files[0]));
      } 
      if(id==="file5"){
        console.log(e.target.files);
        setFile5(URL.createObjectURL(e.target.files[0]));
      } 
      if(id==="file6"){
        console.log(e.target.files);
        setFile6(URL.createObjectURL(e.target.files[0]));
      } 
    }

  // let img=props.image;
  // let imgs=props.fileUploaded

  // let slidess = [SubBanner1, SubBanner2, SubBanner3, SubBanner4, SubBanner5, SubBanner6];
  // let loadProducts = props.loadProducts;
  // const dispatch = useDispatch();

  // const handleToWish = (e, data) => {
  //   e.preventDefault();
  //   let btn = e.currentTarget;
  //   dispatch({ type: "ADD_TO_WISH", payload: { product: data, button: btn } });
  //   data.isAddedToWishlist = true;
  //  /* if(data.isAddedToWishlist === true) {
  //     btn.setAttribute("disabled", "true");
  //     btn.style.color = "red";
  //   }*/
  // }

  // useEffect(() => {
  //   loadProducts(slidess);
  //   const wishedProducts = slidess.filter((element) => element.isAddedToWishlist === true);
  //   console.log(wishedProducts);
  // }, [loadProducts, slidess]);

  // let  product= {
  //   id:1,
  //   name:"tomato",
  //   description:"red",
  //   price:5,
  //   available_quantity:10
  // }

  // const images = [SubBanner1, SubBanner2, SubBanner3, SubBanner4, SubBanner5, SubBanner6];

  const uploadedfile=[null];
  var count=0;
  
  const fileUploaded=event=>{

    uploadedfile[count]=event.target.value;
    count=count+1;
  }

  // const handleInputChange = event => 
  // this.setState({[event.target.name]: event.target.value})

  // const addToCart = () => {
  //   let cart = localStorage.getItem('cart') 
  //             ? JSON.parse(localStorage.getItem('cart')) : {};
  //   let id = product.id.toString();
  //   cart[id] = (cart[id] ? cart[id]: 0);
  //   let qty = cart[id] + parseInt(product.quantity);
  //   if (product.available_quantity < qty) {
  //     cart[id] = product.available_quantity; 
  //   }
  //   else {
  //     cart[id] = qty
  //   }
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }


  <NavBar fileUploaded={fileUploaded}></NavBar>

  return (
    // <div className="card" style={{ marginBottom: "10px"}}>
    //   <div className="card-body">
    //     <h4 className="card-title">{product.name}</h4>
    //     <p className="card-text">{product.description}</p>
    //     <h5 className="card-text"><small>price: </small>${product.price}</h5>
    //     <span className="card-text">
    //       <small>Available Quantity: </small>{product.available_quantity}
    //     </span>
    //     { product.available_quantity > 0 ?
    //       <div>
    //         <button className="btn btn-sm btn-warning float-right" onClick={addToCart}>Add to cart</button>
    //         <input type="number" value={this.state.quantity} name="quantity" 
    //           onChange={this.handleInputChange} className="float-right" 
    //           style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}
    //         />
    //       </div> :
    //       <p className="text-danger"> product is out of stock </p>
    //     } 
    //   </div>
    // </div>
     
    <section className="watchesTypes">
      <h1>Sales</h1>
      {/* <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <Card>
        <img src={file} />
      </Card> */}
      <Container className="p-5">
        <div className="d-flex justify-content-around">

          <div className="veg">
          <Card>
            <h2>Add Image:</h2>
            <input type="file" id="file1" onChange={handleChange} />
            <img src={file1} className="img-fluid" alt="" />
            <h2>Tomatto</h2>
            <p>Price: 38/- per kg</p>
          </Card>
          </div>
          <div className="veg">
            <Card>
              <h2>Add Image:</h2>
              <input type="file" id="file2" onChange={handleChange} />
              <img src={file2} className="img-fluid" alt="" />
              <h2>Garlic</h2>
              <p>Price: 143/- per kg</p>
            </Card>
          </div>
          <div className="veg">
           <Card>
           <h2>Add Image:</h2>
            <input type="file" id="file3" onChange={handleChange} />
            <img src={file3} className="img-fluid" alt="" />
        <h2>Onion</h2>
        <p>Price: 23/- per kg</p>
      </Card>
      
      </div>
      
          {/* <Link to="/">
            <img src={images[0]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[1]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[2]} className="img-fluid" alt="" />
          </Link> */}

        </div>
        <div className="d-flex justify-content-around">

        <div className="veg">
          <Card>
          <h2>Add Image:</h2>
            <input type="file" id="file4" onChange={handleChange} />
            <img src={file4} className="img-fluid" alt="" />
            <h2>Potato</h2>
            <p>Price: 30/- per kg</p>
          </Card>
          </div>
        <div className="veg">
          <Card>
          <h2>Add Image:</h2>
            <input type="file" id="file5" onChange={handleChange} />
            <img src={file5} className="img-fluid" alt="" />
            <h2>Cauliflower</h2>
            <p>Price: 29/- per kg</p>
          </Card>
        </div>
        <div className="veg">
          <Card>
          <h2>Add Image:</h2>
            <input type="file" id="file6" onChange={handleChange} />
            <img src={file6} className="img-fluid" alt="" />
            <h2>Carrot</h2>
            <p>Price: 49/- per kg</p>
          </Card>
        </div>
     

      {/* <div className="d-flex justify-content-around">
      <div className="veg">
      <Card>
      <img src={uploadedfile[0]} className="img-fluid" alt="" />
        <h2>Carrot</h2>
        <p>Price: 49/- per kg</p>
      </Card>
      
    </div>*/}

          {/* <Link to="/">
            <img src={images[3]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[4]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[5]} className="img-fluid" alt="" />
          </Link> */}
        </div>
      </Container>
    </section>

  //   <div className="productSlider mb-5 mt-5">
  //   <Container>
  //     <h5 className="text-left mb-4 ms-4">FEATURED PRODUCTS</h5>
  //     <Carousel controls="false" responsive={ProductsResponsive}>
  //       {slidess.map((slide) => (
  //         <ProductCardElement slidePro={slide} clickWish={handleToWish} />
  //       ))}
  //     </Carousel>
  //   </Container>
  // </div>

  );
}

Types.propTypes = {
  image: PropTypes.image,
  fileUploaded: PropTypes.fileUploaded,
}

export default Types;
