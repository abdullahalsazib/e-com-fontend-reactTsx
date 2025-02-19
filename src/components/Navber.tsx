import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BiLogOut, BiUser } from "react-icons/bi";
import Logout from "../Pages/Log_Sign/Logout";
import { navLinks } from "../data/NavData";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBagX } from "react-icons/bs";
import { useCart } from "../context/ProductContext";
import { RiDeleteBin5Line } from "react-icons/ri";

export const Navber = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext)!;
  const { cartCount } = useCart();

  const displayCount =
    cartCount > 99 ? "99+" : cartCount > 9 ? "9+" : cartCount;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] shadow-xs z-50 fixed ">
      <div className="w-full py-4 px-[10%] flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-35"
            src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-15">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.hrefTo}
                className="uppercase text-gray-600 font-normal hover:font-semibold hover:text-gray-950 text-sm tracking-wider focus:text-[#B88E2F] focus:scale-110 duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Dropdown Menu */}
        <div
          className="relative flex itc justify-center gap-4"
          ref={dropdownRef}
        >
          <ButtonIcon
            icon={<BiUser />}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 top-14 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 border border-slate-200">
              {user ? (
                <>
                  <h1 className="block px-4 py-2 hover:bg-gray-100">
                    Name: {user?.name}
                  </h1>
                  <p className="block px-4 py-2 hover:bg-gray-100">
                    Email: {user?.email}
                  </p>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    📊 Dashboard
                  </Link>
                  {/* <Link
                    to="/update"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    ✏️ Edit Profile
                  </Link> */}

                  <Logout
                    icon={<BiLogOut />}
                    title="Logout"
                    className="flex items-center justify-start gap-3 px-4 py-2 hover:bg-gray-100 "
                  />
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    🔑 Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    📝 Register
                  </Link>
                </>
              )}
            </div>
          )}
          <ButtonIcon icon={<IoSearch />} />
          <ButtonIcon icon={<IoMdHeartEmpty />} />

          <div ref={dropdownRef}>
            <ButtonIcon
              onClick={() => setIsCart(!isCart)}
              icon={<MdOutlineShoppingCart />}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                {displayCount}
              </span>
            )}
            {isCart && (
              <div className=" absolute w-[417px] shadow-lg rounded-lg bg-[#fff] top-0 right-0 p-5 active:duration-500">
                <div className="flex items-center justify-between">
                  <h1 className=" text-2xl capitalize">Shopping Cart</h1>

                  <ButtonIcon
                    className=" text-slate-400"
                    icon={<BsBagX />}
                    onClick={() => setIsCart(!isCart)}
                  />
                </div>
                <hr className="text-slate-300 w-full my-5" />

                <Cart />

                {/* footer of cart */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtonIconProps {
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={` ${props.className} flex items-center justify-center group/btn text-2xl gap-2 p-1.5 cursor-pointer focus:outline-none w-8 h-8 rounded-full duration-200 hover:text-4xl `}
      >
        <div className=" group-focus/btn:scale-50 duration-200">
          {props.icon}
        </div>
      </button>
    </>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); // Assuming `clearCart` is available

  if (cart.length === 0) {
    return <p className="text-center p-4">Your cart is empty.</p>;
  }

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price! * item.quantity,
    0
  );

  return (
    <div className="">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b p-2">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <h2 className="text-lg">{item.name}</h2>
            <p>
              BDT: {item.price} x {item.quantity}
            </p>
          </div>
        </div>
      ))}

      <div className="py-5 px-5">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg capitalize">Subtotal</h1>
          <p className="text-amber-600 capitalize text-lg">BDT: {subtotal}</p>
        </div>
      </div>

      <div className="border-t-[1px] border-gray-400 py-5 flex items-center justify-between">
        {/* Clear Cart Button */}
        <button
          onClick={clearCart} // Calls clearCart function
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          <RiDeleteBin5Line />
        </button>
        <CartBtn handleClick={() => navigate("/cart")} title="Cart" />
        <CartBtn handleClick={() => navigate("/checkout")} title="Checkout" />
        <CartBtn isDisabled={true} title="Comparison" />
      </div>
    </div>
  );
};

interface CartBtnProps {
  title: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
}
const CartBtn: React.FC<CartBtnProps> = ({
  title,
  handleClick,
  type,
  isDisabled,
}) => {
  return (
    <>
      <button
        disabled={isDisabled}
        type={type}
        onClick={handleClick}
        className={` ${
          isDisabled ? "opacity-50 pointer-events-none" : "opacity-90"
        } py-1.5 px-5 rounded-full border-[1px] border-slate-300 cursor-pointer capitalize hover:bg-slate-100 active:scale-105 duration-300`}
      >
        {title}
      </button>
    </>
  );
};

export const BadgeCounter: React.FC<{ count: string }> = ({ count }) => {
  return (
    <>
      <span className=" -top-1 -right-1 text-white py-0.5 px-1  text-xs flex items-center justify-center bg-red-600 rounded-full absolute">
        {count}
      </span>
    </>
  );
};
