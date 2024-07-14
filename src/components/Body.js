import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [originalResData, setOriginalResData] = useState([]);
  const [resDataFiltered, setResDataFiltered] = useState([]);
  const [serachValue, setSerachValue] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9634&lng=77.5855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setOriginalResData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setResDataFiltered(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };


  if(!useOnlineStatus()){
    return(
      <h1>You are offline</h1>
    )
  }
  
 
  if (resDataFiltered.length === 0 && originalResData.length==0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="search">
        <div className="search-box">
          <input
            value={serachValue}
            onChange={(e) => {
              setSerachValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterSearch = originalResData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(serachValue.toLowerCase());
              });
              setResDataFiltered(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            let filtered = resData.filter((res) => res.info.avgRating > 4.1);
            setResDataFiltered(filtered);
          }}
        >
          Filter top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {resDataFiltered.length==0? <>No filter result</>: resDataFiltered.map((data) => (
          <Link key={data.info.id}  to={"/restaurant/"+data.info.id}><RestaurantCard data={data} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
