import Button from "../components/elements/Button";
import Search from "../components/modules/Search";
import RestaurantCard from "../components/elements/RestaurantCard";
import ImageSlider from "../components/modules/sliders/ImageSlider";

import {
  LocationIcon,
  MenuIcon,
  QuntityIcon,
  UserIcon,
} from "../../public/assets/icons/SVG";

function Home() {
  return (
    <div>
      <div className="w-full flex mb-6">
        <ImageSlider />
      </div>

      {/* search section */}
      <div className="w-full h-9 px-5 mb-6 relative md:hidden ">
        <Search className="px-2 flex justify-center items-center border-[1px] border-[#cbcbcb] rounded " />
      </div>

      {/*Restaurant menu */}
      <MenuRestaurant />

      {/* Chain restaurants */}
      <ChainRestaurants />

      {/* Terkhineh tour */}
      <TerkhinehTour />
 
    </div>
  );
}

export default Home;

{
  /*Restaurant menu component */
}
function MenuRestaurant() {
  return (
    <div className="flex flex-col items-center px-5">
      <p className=" font-Estedad-Bold mb-10 md:text-6  ">منوی رستوران</p>
      <div className="flex flex-wrap justify-center w-full gap-x-4 gap-y-16 md:gap-x-3.5 lg:gap-x-6 ">
        <div className="w-[152px] h-[81px] border border-primary rounded relative mt-3 md:w-[170px] md:h-[100px] lg:w-[220px] lg:h-[130px]  ">
          <img
            src="/assets/image/food.png"
            alt="food"
            className="w-[102px] h-[100px] absolute -top-[50px] right-6 md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] lg:right-[25px] "
          />
          <Button
            text="غذای اصلی"
            className="absolute -bottom-5 right-9 w-[71px] h-8 rounded bg-primary text-white text-[12px] md:text-[14] md:right-14 lg:right-[70px]"
          />
        </div>

        <div className="w-[152px] h-[81px] border border-primary rounded relative mt-3 md:w-[170px] md:h-[100px] lg:w-[220px] lg:h-[130px]  ">
          <img
            src="/assets/image/bFood.png"
            alt="food"
            className="w-[102px] h-[100px] absolute -top-[50px] right-6 md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] lg:right-[25px] "
          />
          <Button
            text=" پیش غذا"
            className="absolute -bottom-5 right-9 w-[71px] h-8 rounded bg-primary text-white text-[12px] md:text-[14] md:right-14 lg:right-[70px]"
          />
        </div>

        <div className="w-[152px] h-[81px] border border-primary rounded relative mt-3 md:w-[170px] md:h-[100px] lg:w-[220px] lg:h-[130px ] lg:h-[130px] ">
          <img
            src="/assets/image/deser.png"
            alt="food"
            className="w-[102px] h-[100px] absolute -top-[50px] right-6 md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] lg:right-[25px] "
          />
          <Button
            text=" دسر"
            className="absolute -bottom-5 right-9 w-[71px] h-8 rounded bg-primary text-white text-[12px] md:text-[14] md:right-14 lg:right-[70px]"
          />
        </div>

        <div className="w-[152px] h-[81px] border border-primary rounded relative mt-3 md:w-[170px] md:h-[100px] lg:w-[220px] lg:h-[130px]  ">
          <img
            src="/assets/image/drink.png"
            alt="food"
            className="w-[102px] h-[100px] absolute -top-[50px] right-6 md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] lg:right-[25px] "
          />
          <Button
            text=" نوشیدنی"
            className="absolute -bottom-5 right-9 w-[71px] h-8 rounded bg-primary text-white text-[12px] md:text-[14] md:right-14 lg:right-[70px]"
          />
        </div>
      </div>
    </div>
  );
}

function ChainRestaurants() {
  return (
    <div className="h-[400px] mt-11 flex flex-col justify-around bg-foodInfo bg-center bg-cover bg-no-repeat text-white px-5 py-6  font-Estedad-Regular md:flex-row  md:h-[400px] md:py-10">
      {/* first section */}
      <div className=" relative  md:max-w-[450px]">
        <p className="md:text-[24px]">رستوران های زنجیره ای ترخینه</p>
        <p className="text-[13px]  mt-2 leading-[180%] md:text-[16px]">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <Button
          text="اطلاعات بیشتر"
          className="border rounded w-[152px] h-8 text-[14px] absolute left-0 mt-3.5 md:mt-4"
        />
      </div>

      {/* secound section */}
      <div className="mt-11  flex flex-wrap justify-around  gap-2 gap-y-4 text-[14px]  md:max-w-[350px] md:mt-8 md:h-[250px] ">
        <div className="w-[130px] h-10 flex flex-col items-center justify-between md:w-[100px] lg:w-[130px] ">
          <i className="w-7 h-7 md:h-[50px] md:w-[30px] relative">
            <UserIcon color="#fff" />
          </i>
          <p>پرسنلی مجرب</p>
        </div>

        <div className="w-[130px] h-10 flex flex-col items-center justify-between md:w-[100px] lg:w-[130px] ">
          <i className="w-7 h-7">
            <QuntityIcon width="full" />
          </i>

          <p> کیفیت بالای غذاها</p>
        </div>

        <div className="w-[130px] h-10 flex flex-col items-center justify-between md:w-[100px] lg:w-[130px] ">
          <i className="w-7 h-7 md:h-[35px] md:w-[35px] relative">
            <LocationIcon width="full" height="full" color="#fff" />
          </i>
          <p>محیطی دلنشین و آرام</p>
        </div>

        <div className="w-[130px] h-10 flex flex-col items-center justify-between md:w-[100px] lg:w-[130px] ">
          <i className="text-[25px] font-bold">
            <MenuIcon width="35px" height="35px" color="#F6f6f6" />
          </i>
          <p>منوی متنوع </p>
        </div>
      </div>
    </div>
  );
}

function TerkhinehTour() {
  return (
    <div className="mt-11  flex flex-col items-center px-5 font-Estedad-Regular">
      <p className=" font-Estedad-Bold mb-6 md:text-[20px] "> ترخینه گردی</p>
      <RestaurantCard />
    </div>
  );
}

