import React, { useRef } from "react";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (searchInputRef.current !== null) {
      const term = searchInputRef.current.value;
      router.push(`/search?term=${term}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer transition duration-200 ease-out hover:bg-gray-100" />
          <Avatar url="/images/profilePic.jpg" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-200 px-5 py-3 shadow-sm hover:shadow-lg focus-within:shadow-lg">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Home;
