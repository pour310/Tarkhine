import { CloseIcon, LogoIcon } from "../../../public/assets/icons/SVG";
import Navbar from "./Navbar";

function SidBar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`${
        isOpen === 10 ? "flex flex-col z-50" : "hidden"
      } font-Estedad-Medium text-primary text-[14px]  `}
    >
      <div
        onClick={() => setIsOpen(0)}
        className=" fixed top-0 w-full h-full opacity-80 bg-zinc-500 cursor-pointer z-10"
      ></div>

      <div className="  w-[260px] h-[100vh] fixed right-0 top-0 bg-white z-10  shadow">
        {/* Header of sidebar */}
        <div className="w-full h-[105px] bg-footerImage bg-cover p-4 flex justify-between mb-2">
          <LogoIcon />
          <CloseIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </aside>
  );
}

export default SidBar;
