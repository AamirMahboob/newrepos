import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
    decrementQuantity,
  deleteCartItme,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const dispatch = useDispatch();
  console.log(productData, "asd");
  return (
    <div>
      <h1 className="font-bold text-[20px] font-titleFont">Shopping Cart</h1>
      <div className="flex flex-col">
        <div className="flex flex-col  mt-3">
          {productData.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-row items-center   gap-6 mt-6 "
              >
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(deleteCartItme(item._id))}>
                    <RxCross1 />
                  </button>
                  <img
                    src={item.image}
                    className="w-28 h-28 object-contain "
                    alt=""
                  />
                </div>
                <h1>{item.title}</h1>
                <h1>${item.price}</h1>
                <div className="flex mt-3 gap-3  ">
                  <div className="flex  border border-gray-300 gap-3 w-44 justify-center p-3 rounded-md">
                    <p>Quantity</p>
                    <button
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            image: item.image,
                            title: item.title,
                            price: item.price,
                            oldPrice: item.oldPrice,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="border border-gray-300 w-8 h-6   "
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          incrementQuantity({
                            _id: item._id,
                            image: item.image,
                            title: item.title,
                            price: item.price,
                            oldPrice: item.oldPrice,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="border border-gray-300   w-8 h-6 "
                    >
                      +
                    </button>
                  </div>
                </div>
                <p>${item.quantity * item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => dispatch(resetCart(productData))}
        className="bg-black text-white ml-10 mt-3 p-3"
      >
        Reset Cart
      </button>
    </div>
  );
};

export default CartItem;
