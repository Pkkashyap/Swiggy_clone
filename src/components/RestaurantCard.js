import { IMAGE_BASE_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId,id } = props.data.info;

  return (
    <div className="res-card"  style={{ background: "#f0f0f0" }}>
      <img className="res-logo" src={IMAGE_BASE_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{sla.slaString}</h3>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCard;
