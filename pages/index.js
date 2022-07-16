import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col w-fit bg-blue-100">
        <Head>
          <title>Shrtt.in | Home - The Shorter, The Better</title>
          <meta
            name="description"
            content="Modern URL Shortener, created with you in mind"
          />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main className="">
          {/* Hero */}
          <div className="flex justify-between items-center w-fit h-screen bg-zinc-800 p-8">
            {/* Left */}
            <div>
              <p className="text-l text-gray-400 mb-6">The Shorter, The Better</p>
              <h1 className="text-7xl text-white mb-16 font-bold">
                Premium URL Shortener for free with
                {" "}
                <span className="underline decoration-teal-500">
                  shrtt<span className="text-teal-500">.</span>in{" "}
                </span>
              </h1>
              <Link href="/register">
                <button
                  role="button"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-500 border rounded hover:bg-teal-600 py-4 px-10 my-4 mb-4"
                >
                  Create an account
                </button>
              </Link>
              <br />
              <small className="text-gray-400">
                By signing up, I agree to shorten.it{" "}
                <span className="underline decoration-teal-500">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="underline decoration-teal-500">
                  Terms of Service
                </span>
              </small>
            </div>

            {/* Right */}
            <div>
              <Image
                src="/phone1.png"
                width="650"
                height="500"
                alt="this is a header image"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
