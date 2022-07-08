import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const DashboardNavbar = () => {

  const button = "";
  console.log(button);
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-12 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-black font-bold">
            <span className="underline decoration-teal-500">
              shorten<span className="text-teal-500">.</span>it{" "}
            </span>
          </h1>
        </div>

        {/* Links */}

        {/* Button */}
        <div>
          {button === "unauthenticated" ? (
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full">
              {" "}
              Login
            </button>
          ) : (
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full">
              {" "}
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
