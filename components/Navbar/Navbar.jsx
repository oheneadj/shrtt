import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();
  const button = status;
  console.log(button);
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-12 py-4">
        {/* Logo */}
        <div>
          <Link href={"/index"}>
            <h1 className="text-black font-bold">
              <span className="underline decoration-teal-500">
                shorten<span className="text-teal-500">.</span>it{" "}
              </span>
            </h1>
          </Link>
        </div>

        {/* Links */}

        {/* Button */}
        <div>
          {button === "unauthenticated" ? (
            <Link href="/login">
              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full">
                {" "}
                Login
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full">
                {" "}
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
