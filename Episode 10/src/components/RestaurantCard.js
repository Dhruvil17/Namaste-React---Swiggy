import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
        data.info;
    const { deliveryTime } = sla;
    return (
        <div className="bg-white shadow-lg m-4 p-4 w-[17rem] h-[26rem] border border-double rounded-xl hover:shadow-2xl">
            <img
                className="w-60 h-40 rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="food-image"
            />
            <h3 className="flex justify-center font-bold my-4">{name}</h3>
            <h4 className="my-2">
                <FontAwesomeIcon className="text-green-800" icon={faStar} />
                {" " + avgRating}
                {", "}
                <span className="my-2">{deliveryTime} mins</span>
            </h4>
            <h4 className="my-2">{cuisines.join(", ")}</h4>
            <h4 className="my-2">{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
