import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              
              <option value="Cameras & Lenses">Used Books</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Furnitures">Furnitures</option>
              <option value="Clothes">Clothes</option>
              <option value="Bags">Bags</option>
              <option value="Watch">Watch</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            
            <span onClick={()=>setCategory("Used Books")} >Used Books</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            
            <span onClick={()=>setCategory("Furnitures")} >Furnitures</span>
            <span onClick={()=>setCategory("Clothes")} >Clothes</span>
            <span onClick={()=>setCategory("Bags")} >Bags</span>
            <span onClick={()=>setCategory("Watch")} >Watch</span>
            <span onClick={()=>setCategory("other")} >other</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
