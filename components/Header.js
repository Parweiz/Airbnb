import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import {useState} from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {DateRangePicker} from "react-date-range";

import {useRouter} from "next/dist/client/router";

import ThemeToggle from "./ThemeToggle";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuest] = useState(1);

  const router = useRouter();

  const {placeholder} = props;

  const handleSelectDate = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleCancel = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests
      }
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left section  */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500  ">
        <p className="hidden md:inline ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <ThemeToggle icon />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelectDate}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div
            /* className="flex items-center border-b mb-4" */ className="flex items-center border-b bg-white shadow-sm"
          >
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              min={1}
            />
          </div>

          <div className="flex bg-white pt-4  shadow-sm rounded-b-lg">
            <button
              className="flex-grow text-gray-500 rounded-lg bg-white hover:bg-red-400 hover:shadow-md p-2 mr-1 transiton duration-300 hover:text-white "
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="flex-grow  text-red-400 rounded-lg bg-white hover:shadow-md hover:bg-red-400 p-2 transiton duration-300 hover:text-white "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
