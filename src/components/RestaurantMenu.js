import useRestaurantMenuAPI from "../utils/useRestaurantMenuAPI";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showindex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const menuData = useRestaurantMenuAPI(resId);

  if (menuData == null) {
    return <Shimmer />;
  }

  const title = menuData?.data?.cards[0]?.card?.card?.text;
  const items = menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const realData = items.filter((items) => {
    return items.card.card.title && items.card.card.title != "Top Picks";
  });

  console.log(realData);

  return (
    <div className="menu">
      <div className="font-extrabold text-center m-10 text-2xl">{title}</div>
      {realData.map((item, index) => (
        <div>
          <RestaurantCategory
            data={item?.card?.card}
            isShow={() => setShowIndex(index)}
            index={index}
            show={index == showindex ? true : false}
          />
        </div>
        // <div key={index}><span className='font-bold'>{item?.card?.card?.title}</span><ul>
        //      {item?.card?.card?.itemCards?.map((menu)=>(
        //         <li key={menu?.card?.info?.id}>{menu.card.info.name} - Rs {menu.card.info.price/100 || menu.card.info.defaultPrice/100}</li>
        //      ))}
        //  </ul></div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
