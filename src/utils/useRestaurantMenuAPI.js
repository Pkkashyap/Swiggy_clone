import { useEffect, useState } from "react";

const useRestaurantMenuAPI = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData); 
  };

  return resInfo;
};

export default useRestaurantMenuAPI;
