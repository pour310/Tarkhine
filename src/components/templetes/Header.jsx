import { useState } from "react";
import SidBar from "../modules/SidBar";
import Navbar from "../modules/Navbar";
import {
  CartIcon,
  HobergerMenu,
  LogoIconGreen,
  SearchIcon,
  UserIcon,
} from "../../../public/assets/icons/SVG";
import { accountItem } from "../../Data/data";
import DropDown from "../../Utils/DropDown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(0);
  const showHandler = (num) => {
    if (isOpen === num) {
      setIsOpen(0);
    } else {
      setIsOpen(num);
    }
  };
  return (
    <header className="w-full h-16 flex justify-center items-center md:h-[115px]">
      <section className="w-full max-w-[1350px] relative px-5 flex items-center justify-between flex-row-reverse md:px-8 lg:px-20">
        {/* section for loggin and cart  */}
        <section className="">
          <LeftHeaderIcon
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            showHandler={showHandler}
          />
        </section>

        {/*  Navbar */}
        <section className="hidden md:block">
          <Navbar setIsOpen={setIsOpen} />
        </section>

        {/* section for logo */}
        <section className="w-[102px] h-8 text-primary ">
          <LogoIconGreen />
        </section>

        {/* menu section */}
        <section className="text-primary text-[18px] md:hidden">
          <i onClick={() => showHandler(10)}>
            <HobergerMenu />
          </i>

          <div className="transition ease-in-out">
            <SidBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;

function LeftHeaderIcon({ isOpen, setIsOpen, showHandler }) {
  const items = [
    { title: "search", icon: <SearchIcon />, id: 13 },
    {
      title: "cart",
      icon: <CartIcon width="full" height="full" color="#417F56" />,
      id: 11,
    },
    {
      title: "login",
      icon: <UserIcon width="full" height="full" color="#417F56" />,
      id: 12,
    },
  ];
  return (
    <section className="flex flex-col  ">
      <div className="flex gap-x-2 ">
        {items.map((item) => (
        <div
          key={item.id}
          className={` w-6 h-6 md:w-10 md:h-10 bg-tint1 relative  rounded-[4px] text-primary flex  justify-center items-center cursor-pointer ${item.id === 13 ? "hidden md:flex" : ""} `} 
        >
          <span
            onClick={() => showHandler(item.id)}
            className={` w-4 h-4 md:w-6 md:h-6  relative flex justify-center items-center `}
          >
            {item.icon}
          </span>
        </div>
      ))}
      </div>
      
      <div className={isOpen == 12 ? "flex relative bg-white" : "hidden" } >
         <DropDown data={accountItem} sec={1} />
      </div>
    </section>
  );
}
