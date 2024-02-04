import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product._id;
  const handleDetails = () => {
    navigate(`product/${id}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative w-full">
      <div
        onClick={handleDetails}
        className="h-96 w-full cursor-pointer overflow-hidden relative"
      >
        <img
          src={product.image}
          alt=""
          className=" group-hover:scale-110 duration-500 object-cover h-full w-full"
        />
        
      </div>
      <div className="py-4 border-[1px] flex justify-between  ">
        <div className="ml-3">
          <h2 className="text-[13px] font-bold text-gray-900  ">
            {product.title.substring(0, 15)}
          </h2>
          <div>{product.category}</div>
          {/* <div className="absolute top-2 right-0 bg-black py-1 w-20">
            {product.isNew && <h1 className="text-white text-center">Sale</h1>}
          </div> */}
        </div>
        <div className="mr-3 flex gap-10 relative overflow-hidden w-28 justify-end">
          <div className="relative flex gap-4 transform group-hover:translate-x-24 transition-transform ">
            <p className="text-gray-400   line-through ">${product.oldPrice}</p>
            <p className="text-gray-900   ">${product.price}</p>
          </div>
          <p
            onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                  image: product.image,
                  title: product.title,
                  price: product.price,
                  oldPrice: product.oldPrice,
                  description: product.description,
                  category: product.category,

                  quantity: 1,
                })
              ) & toast.success(`${product.title} is added`)
            }
            className="absolute cursor-pointer text-[16px] transform -translate-x-28 group-hover:translate-x-0 duration-200  flex justify-center items-center gap-1"
          >
            Add to cart
            <span>
              <BsArrowRight />
            </span>{" "}
          </p>
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

export default ProductCard;
