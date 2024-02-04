import React,{useState} from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    const data = useSelector(state=>state.bazar.productData)
    const user = useSelector(state=>state.bazar.userInfo);
    console.log(user)
 

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div className="w-[100vw] h-20 border-b-[1px] sticky border-b-gray-800 font-titleFont px-10 ">
      <div className="w-full  flex justify-between  items-center h-full ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            <a href="/" className="text-gray-800 hover:text-gray-900">
              Bazaar
            </a>
          </h1>
        </div>
        <div className="flex gap-4 md:gap-10 items-center">
          
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-gray-900 focus:outline-none">
              
              ☰
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 w-96 h-full translate-x-2 bg-white p-4 rounded shadow">
              <ul className="flex flex-col gap-2">
                <li className="hover:text-orange-900 cursor-pointer">Home</li>
                <li className="hover:text-orange-900 cursor-pointer">Pages</li>
                <li className="hover:text-orange-900 cursor-pointer">Shop</li>
                <li className="hover:text-orange-900 cursor-pointer">Element</li>
                <li className="hover:text-orange-900 cursor-pointer">Blog</li>

              
              </ul>
            </div>
          )}
           
          <ul className="hidden md:flex gap-4">
            <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
              Home
            </li>
            <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
              Pages
            </li>
            <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
              Shop
            </li>
            <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
              Element
            </li>
            <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
              Blog
            </li>
          </ul>

          <div className="relative flex gap-3 cursor-pointer     ">
           <Link to={'/cart'}><BsCart className="w-9 h-9" /></Link> 
            <div className="absolute top-1 right-3">
              <span>{data.length}</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
          <Link to={'/login'} >
          <img
            src="https://www.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg"
            alt=""
            className="rounded-full w-9 h-9 cursor-pointer"
          />
          
          </Link>
          <p>{
              user? user.displayName : null
            }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
