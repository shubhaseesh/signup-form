import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <Link
        to="/signup"
        className="font-xl bg-slate-200 px-3 py-2 m-2 text-black rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        SignUp
      </Link>
      <Link
        to="/login"
        className="font-xl bg-slate-200 px-3 py-2 m-2 text-black rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navigation;
