import React, { useState } from "react";
// import "./Create.css";
// import Header from "../Header/Header";
// import { Firebase } from "../../firebase/config";
// import { AuthContext } from "../../contextStore/AuthContext";
// import { useHistory } from "react-router";
// import GoLoading from "../Loading/GoLoading";
import Service from "./service";
const Create = () => {
  // const { user } = useContext(AuthContext);
  // const history = useHistory();
  // const [name, setName] = useState(null);
  // const [qty, setQty] = useState(null);
  // const [price, setPrice] = useState(null);
  // let [category, setCategory] = useState(null);
  const [image, setImage] = useState();
  // let img
  // let [loading,setLoading]=useState(false);

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    event.preventDefault()
    hiddenFileInput.current.click();
  };

  const handleInput = event => {

    const{id} = event.target;
    // if(id === "name"){
    //     setName(value);
    // }
    // if(id === "qty"){
    //   setQty(value);
    // }
    // if(id === "price"){
    //   setPrice(value);
    // }
    // if(id == "cat") {
    //   setCategory(value);
    // }
    if(id == "image"){
      setImage(event.target.files[0]);
    }
  }

  // const handleChange = event => {
  //   const fileUploaded = event.target.files[0];
  // }

  const handleSubmit = (event) => {

    event.preventDefault()

    

    // setLoading(true);
    // let date = new Date().toDateString();

    // const fileUploaded = event.target.files[0];

      // props.handleFile(fileUploaded);

      let upload={
        image:image,
        // name:name,
        // price:price,
        // qty:qty,
        // createdAt: date,
      };
    
      Service.uploadImage(upload).then(()=>{
        alert("Uploaded")
        window.location.href = 'http://localhost:3000';
      })

    // Firebase.storage()
    //   .ref(`/image/${image.name}`)
    //   .put(image)
    //   .then(({ ref }) => {
    //     ref.getDownloadURL().then((url) => {
    //       Firebase.firestore()
    //         .collection("products")
    //         .add({
    //           name,
    //           category,
    //           price,
    //           description,
    //           url,
    //           userId: user.uid,
    //           createdAt: date,
    //         })
    //         .then(() => {
    //           history.push("/");
    //         });
    //     });
    //   });
  };
  return (
  //  <Fragment>
      <div className="newpage">
        <form>
          {/* <Header />
          { loading && <GoLoading/> } */}
          <div className="centerDiv">
            <label>Name</label>
            <br />
            <input
              className="input"
              id="name"
              type="text"
              name="name"
       
              onChange={handleInput} required
            />
            <br />
            <label>Category:</label>
            <select
              name="cat"
              id="cat"
       
              onChange={handleInput} required
              className="input"
            > 
              <option >Select Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Meat">Meat</option>
              {/* <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option> */}
            </select>
            <br />
            <label>Price</label>
            <br />
            <input
              className="input"
              id="price"
              type="number"
              name="price"
       
              onChange={handleInput} required
            />
            <br />
            <label>Quantity</label>
            <br />
            <input
              className="input"
              id="qty"
              type="number"
              name="qty"
       
              onChange={handleInput} required
            />
            <br />

            <br />
            <button onClick={handleClick}>Upload</button>
            <input
              id="image"
              type="file"
              ref={hiddenFileInput}
              onChange={handleInput}
              style={{display: 'none'}} 
            />
            {/* <img
              alt="Posts"
              width="200px"
              height="200px"
              src={img ? URL.createObjectURL(img) : ""}
            ></img>

            <br />
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleInput} required
            /> */}
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>
              Upload and Submit
            </button>
          </div> 
        </form>
      </div>
//  </Fragment>
  );
};

export default Create;
