import { FavoritesIcon, StarIcon } from "../../../public/assets/icons/SVG";
import { useFoodAction } from "../../context/FoodContext";
import Button from "./Button";

function FoodCart({food}) {
  const dispatch = useFoodAction()
  return (
    <div className="w-[168px] h-[231px] border rounded font-Estedad-Medium flex flex-col items-center">
      <img src={food.img} className="w-full h-[106px]" />
      <p className=" text-[12px] mt-1">{food.title}</p>
      {/* price and descouned section */}
      <div className="  w-full h-auto px-2 mt-2">
        <div className="flex justify-between">
          <div onClick={()=>dispatch({type: "ADD_TO_FAVOITE", value:1, id:food.id})} className="w-4 h-4 relative ">
            <FavoritesIcon width="full" height="full" color={"#adadad"} />
          </div>
          <div className="text-[10px] flex items-center gap-x-1">
            <span className=" text-gray5 line-through">{food.orginalPrice}</span>
            <span className=" text-Error bg-red-100 h-4 rounded-lg flex items-center justify-center w-8 px-1">
              %{food.discounted}
            </span>
          </div>
        </div>

        <div className="w-full text-[12px] mt-2 flex justify-between">
          <div className="flex text-gray8  ">
            <p><StarIcon /></p>
            <p>5</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p>{food.discountedPrice}</p>
            <p>تومان</p>
          </div>
        </div>
      </div>
      {/* button section */}
      <Button text="افزودن به سبد خرید" onclick={()=>dispatch({type:"ADD_TO_CART", value: 1, id:food.id})} className=" w-[152px] h-8 bg-primary text-[10px] text-white rounded mt-3 mb-2" />
    </div>
  );
}

export default FoodCart;
