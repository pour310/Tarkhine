import { Link } from "react-router-dom";
import { InstagramIcon, TellgramIcon } from "../../../public/assets/icons/SVG";
import Form from "../elements/Form";
import Input from "../elements/Input";
import { useState } from "react";
import Button from "../elements/Button"

const easyAccess = [
  { title: "پرسش های متداول", to: "#", id: 1 },
  { title: "  قوانین ترخینه", to: "#", id: 2 },
  { title: "حریم خصوصی", to: "#", id: 3 },
];

const branchTarkhine = [
  { branch: "شعبه اکباتان", to: "#", id: 1 },
  { branch: " شعبه چالوس ", to: "#", id: 2 },
  { branch: "شعبه اقدسیه", to: "#", id: 3 },
  { branch: "شعبه ونک", to: "#", id: 4 },
];

function Footer() {
  return (
    <footer className="w-full h-[162px] flex justify-center items-center bg-footerImage bg-cover mt-3  py-8 font-Estedad-Regular md:h-[250px] lg:h-[319px]">
      <section className="w-full max-w-[1350px] px-5 flex justify-around   ">
        {/*  easy Access section */}
        <div className="text-white">
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            دسترسی آسان
          </p>
          <ul className="text-white w-28 h-20 py-2 md:w-40">
            {easyAccess.map((item) => (
              <Link to={item.to} key={item.id}>
                <li className="w-40   mb-1  text-[13px] md:text-[15px] lg:text-[16px] cursor-pointer md:my-3 ">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className=" md:mt-4 lg:mt-12 w-14 h-8 md:w-[50px]  lg:w-[55px] lg:h-8  relative flex gap-x-3 ">
            <a href="https://instagram.com/metajs.ir?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
              <InstagramIcon width="full" height="full" color="#fff" />
            </a>
            <a
              href="https://instagram.com/metajs.ir?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D "
              className="lg:w-10"
            >
              <TellgramIcon width="full" height="full" color="#fff" />
            </a>
          </div>
        </div>

        {/* Branch Tarkhine section */}
        <div className="text-white">
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            {" "}
            شعبه های ترخینه
          </p>
          <ul className="text-white w-20 h-20 py-2 md:w-32 text-[13px] md:text-[15px] lg:text-[16px]">
            {branchTarkhine.map((item) => (
              <Link to={item.to} key={item.id}>
                <li className="mb-1  cursor-pointer md:my-3 ">{item.branch}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* cnnection us */}
        <ConnetionUs />
      </section>
    </footer>
  );
}

export default Footer;

function ConnetionUs() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault()
  };

  return (
    <div className="hidden lg:block w-[55%]">
      <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white pb-2">
    
        پیام به ترخینه
      </p>
      <Form onSubmit={submitHandler} className="font-Estedad-Medium  grid lg:grid-cols-3 grid-rows-3  gap-y-4 md:my-3">
        <Input
          type="text"
          name="name"
          value={value.name}
          onChange={changeHandler}
          placeholder="نام و نام خانوادگی"
          className="outline-none h-8 w-40 rounded px-2 mb-2 bg-inherit border border-neutral-600 text-[13px]"
        />
        <textarea
          type="textarea"
          name="message"
          value={value.message}
          onChange={changeHandler}
          placeholder="پیام شما "
          className="outline-none rounded px-2 mb-2 bg-inherit border border-neutral-600 text-[13px]  row-span-3 col-span-2"
        ></textarea>
        <Input
          type="text"
          name="phone"
          value={value.phone}
          onChange={changeHandler}
          placeholder="شماره تماس"
          className="outline-none h-8 w-40 rounded px-2 mb-2 bg-inherit border border-neutral-600 text-[13px]"
        />
        <Input
          type="text"
          name="email"
          value={value.email}
          onChange={changeHandler}
          placeholder="ایمیل (اختیاری)"
          className="outline-none h-8 w-40 rounded px-2  bg-inherit border border-neutral-600 text-[13px]"
        />
        <Button text="ارسال پیام" type="submit" className=" w-28 border border-neutral-600 rounded px-3 py-[3px] text-[14px] text-neutral-300 " />
      </Form>
    </div>
  );
}
