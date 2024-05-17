import { NavLink } from "react-router-dom";

function DropDown({ setIsShow, data, isOpen, sec }) {

  return (
    <ul
      className={`w-[220px] mt-2.5 absolute top-4 rounded text-gray8 text-[14px] bg-inherit md:bg-white  md:w-[154px] md:border md:shadow  md:top-9 md:-right-9 md:flex flex-col  md:mt-0 ${
        isOpen == 2 ? " md:-right-24" : sec == 1 ?  "md:top-3 md:-right-0 w-[140px] text-[10px] z-10 -right-10 -top-0 border " :""
      }`}
    >
      {data.map((item) => (
        <li
          key={item.id}
          onClick={() => setIsShow((is) => !is)}
          className={` my-1  px-3  w-full flex  hover:font-bold rounded transition-all duration-300 py-2 flex-1 md:border-b last:border-b-0 border-gray3 md:w-[85%] hover:w-full md:h-6 md:flex  items-center ${sec == 1 && "border-b w-[95%]"} `}
        >
            <span className={`${sec === 1 ? "flex" : "hidden"} w-4 h-4 `}>
            {item.icon}
          </span>
          <NavLink to={`${item.path}/${item.id}`}>{item.title}</NavLink>
        
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
