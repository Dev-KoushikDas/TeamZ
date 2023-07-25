import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

import "./featured.css";

const Featured = () => {
  
const { data, loading, error } = useFetch(
"/hotels/countByCity?cities=kolkata,barasat,saltlake"
);



  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          
          <Link to="/locationkolkata" className="featuredItem">
            <img
              src={img1}
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Hackathons</h5>
              
              <h2>{data[0]} ongoing..</h2>
              
            </div>
          </Link>
          
          <Link to="/locationbarasat" className="featuredItem">
            <img
              src={img2}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Coding contests</h5>
              <h2>{data[1]} ongoing...</h2>
            </div>
          </Link>
          <Link to="/locationsaltlake" className="featuredItem">
            <img
              src={img3}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Quizes</h5>
              <h2>{data[2]} ongoing</h2>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Featured;
