import { Outlet } from "react-router-dom";

import Search from "../components/modules/Search";
import ImageSlider from "../components/modules/sliders/ImageSlider";

function BranchPage() {
  return (
    <div >
      <div className="w-full flex mb-6">
        <ImageSlider />
      </div>
     <div className="w-full h-9 px-5 mb-6 relative md:hidden ">
        <Search className="px-2 flex justify-center items-center border-[1px] border-[#cbcbcb] rounded " />
      </div>
      <Outlet />
    </div>
  );
}

export default BranchPage;
