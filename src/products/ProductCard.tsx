import React from "react";
import { BiDetail, BiShare, BiTransfer } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { SiShopee } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "../data/NavData";
import { useCart } from "../context/ProductContext";

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart(); // Assuming your cart context provides cart data

  const handleAddToCart = () => {
    const cartItem = cart.find((item) => item.id === product.id); // Find product in cart
    const cartQuantity = cartItem ? cartItem.quantity : 0; // Get quantity in cart
    const requestedQuantity = cartQuantity + 1; // Adding one more to the cart

    if (Number(product.stock) <= 0) {
      alert("Out of stock! You cannot add this product to the cart.");
      return;
    }

    if (requestedQuantity > Number(product.stock)) {
      alert(`You cannot add more than ${product.stock} items!`);
      return;
    }

    addToCart(product); // Add the product to cart if stock allows
  };

  const handleNavigate = () => {
    navigate(`/detils/${product.id}`);
  };
  return (
    <>
      <div className="cursor-pointer duration-200 relative group/card h-[100%] flex items-start justify-between flex-col">
        {/* Product Image */}
        <img
          className=" w-full object-cover group-hover/card:blur-xs"
          src={product.image_url}
          alt="Product"
        />
        <div className=" absolute top-3 left-3 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 group-hover/card:blur-xs text-white">
          -30%
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-start justify-center mt-3 px-5 bg-[#F4F5F7] w-full py-10 space-y-1 group-hover/card:blur-xs">
          <h1 className="text-xl font-semibold">{product.name}</h1>

          {/* Description 10 character porjonto show korbe */}
          {product.description && (
            <p className="text-sm text-slate-600">
              {product.description.slice(0, 30)}
            </p>
          )}

          <div className="flex items-center justify-between py-2 w-full">
            <div>
              <p className="text-gray-800 font-semibold">
                BDT: {product.price}
              </p>
              <p className="text-red-300 text-sm line-through">
                BDT: {Number(product.price) + 100}
              </p>
            </div>
            <p className=" text-blue-400 text-xs  self-start">
              Stock: {product.stock}
            </p>
          </div>
        </div>

        {/* Hover Section */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#3e3d3d82] bg-opacity-50 flex items-center justify-center flex-col text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className=" flex items-center justify-center gap-3 flex-col">
            <CartBtn
              handleClick={handleAddToCart}
              title="Add to Cart"
              icons={<SiShopee />}
            />
            <CartBtn
              handleClick={handleNavigate}
              title="Details"
              icons={<BiDetail />}
            />
          </div>
          <div className="flex items-center justify-center gap-1 w-full px-1 py-2">
            <CardSubLink
              icons={
                <BiShare className=" group-hover/sub:text-sky-500 group-hover/sub:scale-125" />
              }
              title="share"
            />
            <CardSubLink
              icons={
                <BiTransfer className=" group-hover/sub:text-sky-500 group-hover/sub:scale-125" />
              }
              title="compare"
            />
            <CardSubLink
              icons={
                <HiHeart className=" group-hover/sub:text-red-500 group-hover/sub:scale-125" />
              }
              title="like"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

interface CardSubLinkProps {
  title: string;
  icons: React.ReactNode;
  handleClick?: () => void;
}

const CartBtn: React.FC<CardSubLinkProps> = ({ title, icons, handleClick }) => {
  return (
    <>
      <button
        className="py-2 px-6 text-sm  bg-white hover:text-orange-500 text-black cursor-pointer capitalize flex items-center justify-center gap-2 group/cartbtn active:scale-115 duration-200"
        onClick={handleClick}
      >
        <div className=" text-lg group-hover/cartbtn:scale-115 duration-200">
          {icons}
        </div>{" "}
        <h1> {title}</h1>
      </button>
    </>
  );
};

const CardSubLink: React.FC<CardSubLinkProps> = (props) => {
  return (
    <>
      <a
        href="#"
        className="flex items-center justify-center gap-1 group/sub font-light capitalize text-sm  py-1 px-2 text-slate-50 hover:scale-110 duration-200"
      >
        {props.icons}
        <p className=" group-hover/sub:text-slate-100">{props.title}</p>
      </a>
    </>
  );
};
