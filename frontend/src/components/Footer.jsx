import React from "react";
import { FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="py-20 flex justify-between bg-black text-[#949494] mx-auto font-titleFont">
      <div className="flex flex-col  mx-10 gap-5">
        <h1 className="text-2xl font-bold text-white">
          <a href="/" className="  text-white">
            Bazaar
          </a>
        </h1>
        <p>©ReactBD.com</p>
        <img src="https://c0.klipartz.com/pngpicture/805/227/gratis-png-paypal-el-siguiente-nivel-de-servicio-de-la-industria-de-pasarela-de-pago-paypal.png"
        className="w-36" alt=""
        />
        <div className="flex gap-4 ">
           <FaGithub  className="h-6 w-6 hover:text-gray-100 duration-200 cursor-pointer"/>
           <FaFacebook  className="h-6 w-6 hover:text-gray-100 duration-200 cursor-pointer"/>
           <FaTwitter  className="h-6 w-6 hover:text-gray-100 duration-200 cursor-pointer"/>
           <FaInstagram  className="h-6 w-6 hover:text-gray-100 duration-200 cursor-pointer"/>

        </div>
      </div>
      <div className="mx-10 flex flex-col" >
        <h1 className="font-bold text-white text-2xl">Locate us</h1>
        <h1>street xyz,washington</h1>
        <h1>+92xyzxyzxyz</h1>
        <h1>xyz@gmail.com</h1>
        <h1>+92xyzxyzxyz</h1>
         

        

      </div>
      <div className="mx-10 flex flex-col">
      <h1 className="font-bold text-white text-2xl">Profile</h1>
        <h1>street xyz,washington</h1>
        <h1>+92xyzxyzxyz</h1>
        <h1>xyz@gmail.com</h1>
        <h1>+92xyzxyzxyz</h1>
     


      </div>
      <div className="mx-10 flex flex-col justify-center     ">
         <input type="text" placeholder="enter your email" className="border border-b-white bg-transparent px-10 py-2"/>
         <button className="text-white border border-t-0 active:bg-white hover:bg-gray-900">Subscribe</button>
     


      </div>
    </div>
  );
};

export default Footer;
