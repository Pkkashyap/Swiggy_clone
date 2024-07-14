import useRestaurantMenuAPI from '../utils/useRestaurantMenuAPI'
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
const {resId} = useParams();
const menuData = useRestaurantMenuAPI(resId);

  if(menuData ==null ){
    return <Shimmer/>
  }

  const items = menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const realData = items.filter((items) => {
      return items.card.card.title && items.card.card.title != "Top Picks";
    });

    console.log(realData);

  return (
    <div className="menu">
     {realData.map((item,index)=>(
        <div key={index}><h1>{item?.card?.card?.title}</h1><ul>
             {item?.card?.card?.itemCards?.map((menu)=>(
                <li key={menu?.card?.info?.id}>{menu.card.info.name} - Rs {menu.card.info.price/100 || menu.card.info.defaultPrice/100}</li>
             ))}
         </ul></div>
     ))}
    </div>
  );
};

export default RestaurantMenu;
