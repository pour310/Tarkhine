
import { useParams } from "react-router-dom";
import { useBranchData } from "../Hooks/branchHook";
import FoodSlider from "../components/modules/sliders/FoodSlider";
import { useFood } from "../context/FoodContext";

function BranchDetails() {
 const {id} = useParams()
  const foods = useBranchData(id)
  const dataFood = foods.value.length > 0 && foods.value[0].foods
  console.log(dataFood);

  return (
    <div>
      {/* special Offer Food */}
      <p className="w-full font-Estedad-Bold px-5">پیشنهاد ویژه</p>
      <section className=" pr-6 overflow-auto">
        <div className="  py-4  flex">
          <SpecialOffer data={dataFood} />
        </div>
      </section>
    </div>
  );
}

export default BranchDetails;

function SpecialOffer({ data }) {
  console.log(data);
  return (
    <div className="">
      <FoodSlider data={data} />
    </div>
  );
}
