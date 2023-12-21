import { useState } from "react";
import { restaurantList } from "../utils/common";
import ResCard from "./ResCard";
const Body = () => {
  const [resData, setResData] = useState(restaurantList);
  console.log(resData);
  const handleClick = () => {
    const filteredData = restaurantList.filter(
      (restu) => restu.data.avgRating > 4
    );
    setResData(filteredData);
    console.log(filteredData);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((res) => {
          return <ResCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
