
import FoodCart from "../../elements/FoodCart";

function FoodSlider({ data }) {
  console.log(data);

  return (
    <div className="w-full h-64 flex gap-x-4">
      {data  ? data.map((food) => (
        <div key={food.id} className=" ">
          <FoodCart food={food} />
        </div>
      )) : "loggin..."}
    </div>
  );
}

export default FoodSlider;
