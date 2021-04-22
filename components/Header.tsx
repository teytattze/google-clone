import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/");
  };

  const handleClear = (): void => {
    if (searchInputRef.current !== null) {
      searchInputRef.current.value = "";
    }
  };

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (searchInputRef.current !== null) {
      const term = searchInputRef.current.value;
      router.push(`/search?term=${term}`);
    }
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          onClick={handleClick}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 max-w-3xl border border-gray-200 rounded-full shadow-lg">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-200 ease-out transform hover:scale-125"
            onClick={handleClear}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={handleSearch}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="images/profilePic.jpg" />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
