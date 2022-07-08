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
      <div className=" flex flex-col bg-blue-100">
        <Head>
          <title>Shorten.it | Home - The Shorter The Better</title>
          <meta
            name="description"
            content="Modern URL Shortener, created with you in mind"
          />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main className="h-screen flex flex-col ">
          {/* Hero */}
          <div className="flex flex-row justify-between items-center h-screen bg-zinc-800 p-20">
            {/* Left */}
            <div>
              <p className="text-xl text-gray-400 mb-6">-Get your url short</p>
              <h1 className="text-7xl text-white mb-16 font-bold">
                Enter your Link
                <br />
                -We'll{" "}
                <span className="underline decoration-teal-500">
                  shorten<span className="text-teal-500">.</span>it{" "}
                </span>
                <br /> for you.
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
