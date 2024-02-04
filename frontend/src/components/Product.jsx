import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const [singleProduct, setsingleProduct] = useState("");
  const [baseQty, setBaseQty] = useState(1);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setsingleProduct(location.state.item);
  }, [location]);

  return (
    <div className="flex justify-center gap-10 py-10   ">
      <div className="h-[400px] bg-white overflow-hidden relative">
        <img
          src={singleProduct.image}
          alt=""
          className="h-full border  border-gray transform hover:scale-110 duration-300 "
        />
        <div className="absolute top-0 right-0 bg-black">
          {singleProduct.isNew && (
            <h1 className="  w-[100px] px-3 py-2 text-white text-center">
              Sale
            </h1>
          )}
        </div>
      </div>
      <div className="bg-white w-2/5">
        <h1 className="text-gray-900 font-bold text-[20px] ">
          {singleProduct.title}
        </h1>
        <div className="flex gap-3">
          <p className="text-gray-400   line-through ">
            ${singleProduct.oldPrice}
          </p>
          <p className="text-gray-900   ">${singleProduct.price}</p>
        </div>
        <div className="flex gap-2 mt-5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p className="mt-[-5px]">(1 customer review)</p>
        </div>
        <div className="mt-5 w-full">
          <p className="text-gray-900   ">{singleProduct.description}</p>
        </div>
        <div className="flex mt-3 gap-3  ">
          <div className="flex  border border-gray-300 gap-3 w-44 justify-center p-3 rounded-md">
            <p>Quantity</p>
            <button
              onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
              className="border border-gray-300 w-8 h-6   "
            >
              -
            </button>
            <span>{baseQty}</span>
            <button
              onClick={() => setBaseQty(baseQty + 1)}
              className="border border-gray-300   w-8 h-6 "
            >
              +
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: singleProduct._id,
                  image:singleProduct.image,
                  title: singleProduct.title,
                  price: singleProduct.price,
                  oldPrice: singleProduct.oldPrice,
                  quantity: baseQty,
                })
              )&toast.success(`${singleProduct.title} is added`)
            }
            className="bg-black text-white p-3 border  hover:border-white rounded-md   active:bg-white active:text-black active:border-black"
          >
            Add to Cart
          </button>
        </div>
        <div>
          <h1 className="text-gray-900  mt-10 ">
            Category: {singleProduct.category}
          </h1>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Product;
