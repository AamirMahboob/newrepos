import React from "react";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, deleteUserInfo } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const user = useSelector((state) => state.bazar.userInfo);

  const accessToken = user?.uid;  
  console.log(accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUserInfo(user));
        setTimeout(() => {
          toast.success("Login Success");
          navigate("/");
        });
      }, 15000)

      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("log out successfully");
        dispatch(deleteUserInfo());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center py-10 flex-col gap-4">
      <div className="flex flex-col gap-4 cursor-pointer  ">
        <div
          onClick={signInWithGoogle}
          className="flex  border border-black p-3 rounded-md gap-3"
        >
          <FaGoogle />
          <span>Sign in with google</span>
        </div>
       {accessToken ? (
          <button onClick={handleSignOut} className="bg-black px-10 py-2 rounded-md text-white cursor-pointer">
            Sign out
          </button>
        ) : null}
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

export default Login;
