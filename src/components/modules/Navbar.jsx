import { NavLink } from "react-router-dom";
import { branchName, menuItem, navbarItem } from "../../Data/data";
import { useState } from "react";
import DropDown from "../../Utils/DropDown";

function Navbar() {
  const [isShow, setIsShow] = useState(0);


  const openHandler = (id) => {
    if (id === isShow) {
      setIsShow(0);
    } else {
      setIsShow(id);
    }
    
  };

  return (
    <ul className="w-full px-2 md:flex gap-x-2 md:mt-3 ">
      {navbarItem.map((item) => (
        <li
          onClick={() => openHandler(item.id)}
          key={item.id}
          className={`
          ${isShow == item.id && item.id == 2 || isShow == item.id &&  item.id == 3 ? " h-48 " : ""}
          w-full  mb-2  border-b  flex flex-col   border-[#cbcbcb] py-1 px-1 text-neutral-600 md:w-auto md:h-auto md:border-none md:text-[14px] lg:text-[17px] relative`}
        >
          <NavLink
            to={item.to}
            className="w-full flex items-center  justify-between transition-all duration-300 relative"
          >
            <div className="flex gap-x-1.5">
              <i className="text-[15px] mt-1 md:hidden">{item.icon}</i>
              <span>{item.link}</span>
            </div>

            <span
              className={
                item.id === isShow
                  ? "rotate-180 transition-all duration-300"
                  : "transition-all duration-300"
              }
            >
              {item.leftIcon}
            </span>
          </NavLink>
          <div className={isShow == item.id && item.id == 2 || isShow == item.id &&  item.id == 3 ? " opacity-100" : " opacity-0"} >
            {isShow === item.id && item.id === 2 && <DropDown setIsShow={setIsShow} isShow={isShow}  data={branchName}  />}
            {isShow === item.id && item.id === 3 && <DropDown setIsShow={setIsShow} isShow={isShow} data={menuItem} />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
