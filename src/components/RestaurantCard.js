import { IMAGE_BASE_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId,id } = props.data.info;

  return (
    <div className="m-4 w-[250px]"  style={{ background: "#f0f0f0" }}>
      <img className="w-[250px] h-[250px]" src={IMAGE_BASE_URL + cloudinaryImageId}></img>
      <h3 className="font-bold font-extra bold">{name}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{sla.slaString}</h3>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};


export const withPromote = (RestaurantCard)=>{
  return (props)=>(<>
    <label className="bg-black absolute text-white m-2 p-2 rounded-lg">Promoted</label>
    <RestaurantCard {...props}/>
    </>
  )
}

export default RestaurantCard;
