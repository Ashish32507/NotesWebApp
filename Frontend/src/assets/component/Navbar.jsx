import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="w-full h-16 bg-black text-white px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Notes App</div>
        <div>
          <button
            className="text-xl font-semibold bg-green-600 px-2 py-1 rounded-md"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
