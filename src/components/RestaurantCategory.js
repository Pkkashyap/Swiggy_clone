import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //   const [showitem, setShowitem] = useState(props.isShow);
  const item = props.data;
  console.log(item);
  const lenOfCategory = item?.itemCards?.length || item?.categories?.length;
  return (
    <div>
      <div className="w-6/12 mx-auto bg-gray-300 my-4 p-8 rounded-lg shadow-lg">
        <div>
          <div
            className=" flex justify-between cursor-pointer"
            onClick={() => {
              props.isShow();
            }}
          >
            <span className="font-bold my-2 text-xl">
              {item.title} ({lenOfCategory})
            </span>
            <span className="text-xl">⬇️</span>
          </div>
        </div>
        {props.show && <ItemList item={item} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
