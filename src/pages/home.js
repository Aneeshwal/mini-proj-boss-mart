import React from "react";
import MainSlider from "../mainslider";
import Types from "../types";
import ProductTabs from "../producttabs";
// import Brandslogo from "../brandlogo";
// import ClientCarousel from "../clientcarousel";
// import ProductCard from "../productcard";
// import allProducts from "../services/watches";

function Home() {

  return (
      <div>
        <MainSlider />
        <ProductTabs />
        <Types />
        
        {/* <Brandslogo />
        <ProductCard slides={allProducts} /> */}
        {/* <ClientCarousel /> */}
      </div>
  );

}

export default Home;
