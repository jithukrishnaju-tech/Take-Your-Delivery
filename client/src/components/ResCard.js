import { resImg } from "../utils/common";
const ResCard = (props) => {
  return (
    <div className="rescard">
      <img
        className="resimg"
        src={resImg + props.resData.data.cloudinaryImageId}
      ></img>
      <h3>{props.resData.data.name}</h3>
      <h4>{props.resData.data.cuisines.join(", ")}</h4>
      <h4>{props.resData.data.avgRating} star</h4>
      <h4>{props.resData.data.deliveryTime} minutes</h4>
    </div>
  );
};
export default ResCard;
