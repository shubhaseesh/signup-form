import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex h-full bg-slate-400 justify-center space-x-4  sm:h-12 ">
      <Link
        to="/signup"
        className="font-xl px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        SignUp
      </Link>
      <Link
        to="/login"
        className="font-xl px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navigation;
