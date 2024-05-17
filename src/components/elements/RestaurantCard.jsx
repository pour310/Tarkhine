import { DrapDownIcon } from "../../../public/assets/icons/SVG";
import Button from "./Button";
import {branchName} from "../../Data/data.jsx";


function RestaurantCard() {
  return (
    
       <div className="md:flex  md:gap-x-4 lg: gap-x-7 xl:gap-x-10  ">
      {branchName.map((item) => (
        <div key={item.id} className="rounded border flex mb-3 h-[100px] transition-all duration-500 md:hover:scale-[1.1] md:flex-col md:w-[170px] md:h-[260px] md:items-center lg:w-[215px] lg:h-[260px] xl:w-[250px] xl:h-[280px] ">
          <img src={item.image} alt="item.RestaurantTitle" className="w-[35%] rounded md:w-full md:h-[100px] lg:h-[120px]" />
          <div className="flex flex-col items-center px-4 py-3 w-[65%] text-center md:w-full">
            <p className="text-[15px] font-Estedad-Medium">{item.RestaurantTitle}</p>
            <p className="mt-3 text-[13.5px]  ">{item.address}</p>
          </div>
          <Button text="صفحه شعبه" className="hidden md:w-[90px] text-[13px] md:flex items-center justify-between border border-primary text-primary rounded p-1 hover:border-[2px] " >
           <i className=" rotate-90">
            <DrapDownIcon />
            </i> 
          </Button>
        </div>
      ))}
    </div>
   
   
  );
}

export default RestaurantCard;
