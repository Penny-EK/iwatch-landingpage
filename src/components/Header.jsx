import { FaApple } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="innerSection">
      <div className="logo">
        <FaApple size={40} color="white" />
      </div>
      <ul className="menu">
        <li>
          <a href="">Mac</a>
        </li>
        <li>
          <a href="">iPhone</a>
        </li>
        <li>
          <a href=""> iPad</a>
        </li>
        <li className="active">
          <a href="">iWatch</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
      </ul>
      <div>
        <AiOutlineSearch color="white" size={24} />
        <RiShoppingBag3Line color="white" size={24} />
      </div>
    </nav>
  );
};

export default Header;
