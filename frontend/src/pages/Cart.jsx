import React, { useEffect,useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { toast,ToastContainer } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const user = useSelector((state) => state.bazar.userInfo)
  const [pay,setPay] =  useState(false)
  const [total,setTotal]=useState(0)
  const payment = async (token) => {
    console.log('Before Axios Request');
    try {
       await axios.post('http://localhost:8000/pay', {
          token: token.id,
          total: total,
       });
       console.log('After Axios Request (Success)');
    } catch (error) {
       console.error('After Axios Request (Error)', error);
    }
 };
 
  useEffect(() => {
    const subtotal = productData.reduce((acc, curr) => {
      const itemTotal = curr.price * curr.quantity;  
      return acc + itemTotal;
    }, 0);
     setTotal(subtotal.toFixed(2))
    console.log('Subtotal:', subtotal);

    // let price = 0;
    // productData.map((item)=>{
    //     price += item.price * item.quantity
    //     return price
    // })
    // setTotal(price.toFixed(2))
  }, [productData]);
  const handlePayment = () => {
    if(user){
      setPay(true)
    }
    else{
      toast.error("please log in")
    }
  }
  
  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg" className='h-56 w-full object-cover' alt="" />
    <div className='flex px-3 mt-2 p-10 m-4'>
      
     <div className='w-[60%]'>
      <CartItem />
     </div>
      <div className='bg-gray-100 w-[40%] h-fit flex flex-col gap-5 px-3'>
          <h1 className='font-bold text-lg font-titleFont'>Cart Totals</h1>
          <div className='mt-10 flex gap-4'>
            <h1 className='font-bold text-lg font-titleFont'>Sub Total</h1>
            <h1>$ {total}</h1>

          </div>
          <div className='mt-10 flex gap-4 font-titleFont'>
            <h1>shipping</h1>
            <p>lorem ipsum dollar imit, Lorem  voluptate sapiente minus exercitation imus ratione sit.</p>
          

          </div>
          <hr />
          <div className='mt-10 flex flex-row justify-between  '>
            <h1>Total</h1>
            <h1>$ {total}</h1>
          
          
          </div>
          <div className='flex justify-center m-3'>
          <button onClick={handlePayment} className='bg-black text-white p-4 w-1/2  '>Proceed to checkout</button>
          
          </div>
          {
            pay && (
              <div className='flex justify-center items-center m-2 '>
                <StripeCheckout 
                   stripeKey='pk_test_51OdvHDBBXGqXZDo5Wdi0oa2g3AyOcaCuMpdJbaCiBnxwJdrBo3PtL2oa55swC76GU107YAYKNomVxVCeRERm50BP00F6K945Kb'
                   label="pay to bazar"
                   email={user.email}    
                   amount={total * 100}      
                   description={`your total amount is ${total}`}
                   name='bazar online shopping'
                  token={payment}
                 />
                </div>
            )
          }
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
  )
}

export default Cart
