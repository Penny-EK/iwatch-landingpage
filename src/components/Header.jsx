import { FaApple } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="mx-auto flex max-w-[1211px] flex-row items-center justify-between py-7">
      <FaApple size={40} color="white" />

      <ul className="flex list-none items-center justify-center gap-[90px]">
        <li>
          <a
            className="font-[Poppins] text-[18px] font-medium text-white no-underline"
            href=""
          >
            Mac
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-[18px] font-medium text-white no-underline"
            href=""
          >
            iPhone
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-[18px] font-medium text-white no-underline"
            href=""
          >
            {" "}
            iPad
          </a>
        </li>
        <li className="rounded-full bg-white px-[35px] py-2.5">
          <a
            className="font-[Poppins] text-[18px] font-medium text-[#b9cfdd] no-underline"
            href=""
          >
            iWatch
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-[18px] font-medium text-white no-underline"
            href=""
          >
            Support
          </a>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-center gap-4">
        <AiOutlineSearch color="white" size={24} />
        <RiShoppingBag3Line color="white" size={24} />
      </div>
    </nav>
  );
};

export default Header;
