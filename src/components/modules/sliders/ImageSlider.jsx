import { useEffect, useState, useRef } from "react";
import { FcNext } from "react-icons/fc";
import Button from "../../elements/Button";
const images = [
  {
    img: "/assets/image/Slider.png",
    id: 0,
    btn: "سفارش آنلاین غذا",
    text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    img: "/assets/image/Slider2.png",
    id: 1,
    btn: "سفارش آنلاین غذا",
    text: "سرسبزی اکباتان دلیل حس خوب شماست!",
  },
  {
    img: "/assets/image/Slider.png",
    id: 2,
    btn: "سفارش آنلاین غذا",
    text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    img: "/assets/image/Slider2.png",
    id: 3,
    btn: "سفارش آنلاین غذا",
    text: "سرسبزی اکباتان دلیل حس خوب شماست!",
  },
];

function ImageSlider() {
  const [id, setId] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (id < images.length - 1) {
        setId((id) => id + 1);
      } else {
        setId(0);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [id]);

  useEffect(() => {
    ref.current = id;
  }, [id]);

  //  function for next and back slid
  const nextSlid = () => {
    if (images.length - 1 === id) {
      setId(0);
    } else setId((i) => i + 1);
  };

  const backSlid = () => {
    if (id == 0) {
      console.log(id);
      setId(images.length - 1);
    } else {
      setId((id) => id - 1);
    }
  };

  return (
    <div className="w-full h-[175px] relative md:h-[366px] -z-10  ">
      <img src={images[id].img} alt="" className={`w-full h-full  `} />
      <div className="  w-full flex flex-col items-center  absolute  z-30 top-[45%]">
        <div className="w-full flex justify-between items-center px-2 md:px-5">
          {/* next slide button */}
          <button
            onClick={nextSlid}
            className=" w-6 h-6 rounded-full border-none cursor-pointer hover:bg-blue-300 opacity-70 hover:text-white font-bold bg-slate-50 flex justify-center items-center "
          >
            <i>
              <FcNext />
            </i>
          </button>

          <p className="text-[16px] md:text-[35px] text-tint1 font-Estedad-ExtraBold ">
            {images[id].text}
          </p>

          {/* back slide button */}
          <button
            onClick={backSlid}
            className=" w-6 h-6 rounded-full border-none cursor-pointer hover:bg-blue-300 opacity-70 hover:text-white font-bold bg-slate-50 flex justify-center items-center  rotate-180 "
          >
            <i>
              <FcNext />
            </i>
          </button>
        </div>
        {/* order button */}
        <Button
          text={images[id].btn}
          className="  text-[10px] text-tint1 bg-primary w-[91px] h-6 mt-4 md:mt-7 md:w-[184px] md:h-[40px] rounded-lg md:text-[16px]"
        />
      </div>

      <div className=" dotes flex justify-center  absolute bottom-0 right-[40%] md:right-[45%] w-20">
        {images.map((slid) => (
          <p
            key={slid.id}
            className={`${
              slid.id === ref.current
                ? " w-2.5 h-2.5 bg-primary  ring-[3px] ring-green-400  "
                : " bg-[#adadad]"
            } w-2 h-2 rounded-full mr-1 mt-2 cursor-pointer  `}
          ></p>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
