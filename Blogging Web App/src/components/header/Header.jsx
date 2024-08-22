import { IoSearchOutline } from "react-icons/io5";
import { GiBallGlow } from "react-icons/gi";
import logo from "../../images/Union.png";

const Header = () => {
  return (
    <>
      <div className="headerCon flex justify-between items-center h-20 w-full py-4 px-16 shadow-md bg-white mb-[10px]">
        <div className="left_Sec flex items-center gap-2">
          <img src={logo} alt="logo_icon" className="h-10 w-auto" />
          <span className="text-lg font-bold">
            Meta<strong>Blog</strong>
          </span>
        </div>
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Single Page</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="right_sec flex items-center gap-5">
          <div className="searchBox h-8 w-[150px] rounded-md flex justify-between items-center bg-gray-50 px-4">
            <span className="text-gray-500">Search</span>
            <IoSearchOutline />
          </div>
          <div className="h-8 w-8 rounded-lg bg-gray-50 flex justify-center items-center">
            <GiBallGlow className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      </div>

      <div className="block md:hidden  justify-center py-2">
        <button className="text-lg font-semibold">Menu</button>
      </div>
    </>
  );
};

export default Header;
