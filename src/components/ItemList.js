import { IMAGE_BASE_URL } from "../utils/constant";
const ItemList = (props) => {
  const item = props?.item?.itemCards;
  console.log(item);
  return (
    <div>
      {item &&
        item.map((ele) => (
          <div className="p-2 m2 border-b-2 border-gray-200 text-left">
            <div className="flex justify-between">
              <div>
                <div className="py-2">
                  <span className="font-semibold">{ele.card.info.name}</span> -
                  ₹
                  <span>
                    {ele.card.info.defaultPrice / 100 ||
                      ele.card.info.price / 100}
                    .0
                  </span>
                </div>
                <div>
                  <p className="text-xs">{ele.card.info.description}</p>
                </div>
              </div>
              <div>
                <img
                  className="w-[150px] rounded-xl"
                  src={IMAGE_BASE_URL + ele.card.info.imageId}
                ></img>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
