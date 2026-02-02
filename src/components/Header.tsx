import { FaSearch } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { RiMovie2AiFill } from "react-icons/ri";

function Header() {
  return (
    <header className="bg-gray-900 text-white text-center">
      <div className="flex p-4 px-7 gap-20 items-center"> 
        <div className="flex items-center">
          <RiMovie2AiFill className="size-10 text-red-600" />
          <h1 className="text-2xl font-bold">MovieApp</h1>
        </div>

        <div className="flex items-center bg-white rounded-full px-6 py-1">
          <button className="bg-transparent border-none cursor-pointer">
            <FaSearch className="text-[#7A7A7A] size-5" />
          </button>
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none text-black px-8 h-8 rounded-full"
          /> 
        </div>

        <div className="text-xl font-bold"> <h1 >Trending Movies</h1></div>
        <div className="text-xl font-bold"> <h1 >Latest Movies</h1></div>

        <div className="flex items-center gap-1">
          <IoBookmarksSharp className="size-5" />
           <h1 className="text-xl font-bold">Watchlist</h1>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
