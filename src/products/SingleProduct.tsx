import { useEffect, useState } from "react";
import { getProductById, ProductProps } from "../api/Product";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/ProductContext";
import { FaAngleRight } from "react-icons/fa";
import { BiPlus, BiRightArrow, BiSolidStar, BiStar } from "react-icons/bi";
import { Footer } from "../Pages/Footer";

const SingleProduct = () => {
  const { addToCart, updateQuantity } = useCart();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [cartItem, setCartItem] = useState(1); // Default quantity is 1

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error("Error Fetching :", error));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    if (cartItem <= 0) {
      alert("Quantity must be at least 1!");
      return;
    }

    if (cartItem > product.stock) {
      alert(`Only ${product.stock} items available in stock!`);
      return;
    }

    // console.log("Added to cart:", product, "Quantity:", cartItem);
    addToCart(product);
    // updateQuantity(product, cartItem)
    updateQuantity(product.id!, cartItem);
  };

  if (!product) {
    return <p className="text-center">Loading product details...</p>;
  }

  return (
    <div className="pt-19">
      <div className="bg-[#fff3e3] w-full py-8 px-[10%] text-lg text-slate-500 flex items-center gap-5 capitalize">
        <Link className="hover:text-slate-600 cursor-pointer" to={"/"}>
          Home
        </Link>
        <FaAngleRight className="text-xl text-black" />
        <Link className="hover:text-slate-600 cursor-pointer" to={"/shop"}>
          Shop
        </Link>
        <FaAngleRight className="text-xl text-black" />
        <span className="relative h-[50px] right-0 px-[1px] bg-slate-400 w-[0.2px]"></span>
        <p className="text-slate-900">{product.name}</p>
      </div>

      <div className="flex w-full px-[10%] gap-10 flex-row py-10 h-[70vh]">
        {/* Product Images */}
        <div className="w-1/2 flex items-start justify-start flex-row gap-10">
          <div className="flex items-start justify-center flex-col gap-10">
            <img
              src={product.image_url}
              alt="error"
              className="w-20 h-20 bg-slate-100 ring-1 ring-blue-500 p-1 rounded-lg shadow-2xl"
            />
            <img
              src={product.image_url}
              alt="error"
              title={product.image_url}
              className="w-20 h-20 bg-slate-100 ring-1 ring-blue-500 p-1 rounded-lg shadow-2xl"
            />
          </div>
          <img
            className="w-[80%] bg-slate-100 shadow-2xl rounded-lg ring-1 ring-blue-200 opacity-90 "
            src={product.image_url}
            alt=""
          />
        </div>

        {/* Product Details */}
        <div className="w-1/2 flex items-start justify-between gap-20 flex-col">
          <div className="space-y-1">
            <h1 className="text-[42px] font-bold capitalize w-full flex items-center justify-between">
              {product.name} <p className=" text-sm text-blue-500">stock: {product.stock}</p>
            </h1>
            <p className="text-slate-600 text-2xl">৳. {product.price}tk</p>

            {/* Rating */}
            <div className="flex items-center justify-start gap-5 py-2">
              <div className="flex items-center justify-center text-xl space-x-2">
                <BiSolidStar className="text-yellow-500" />
                <BiSolidStar className="text-yellow-500" />
                <BiSolidStar className="text-yellow-500" />
                <BiSolidStar className="text-yellow-500" />
                <BiStar className="text-yellow-500" />
              </div>
              <span className="relative h-[30px] right-0 px-[1px] bg-slate-200 w-[0.2px]"></span>
              <p className="text-sm capitalize text-slate-300">
                5 customer reviews
              </p>
            </div>

            <p className="w-[60%] text-sm text-slate-700">
              {product.description}
            </p>

            {/* Cart Interaction */}
            <div className="flex items-center justify-around gap-10 py-5">
              <div className="flex items-center justify-center border-2 rounded-lg border-slate-400 hover:bg-slate-100 group/icon">
                <button
                  className="cursor-pointer text-lg py-4 px-5 active:scale-125"
                  onClick={() => {
                    if (cartItem > 0) setCartItem(cartItem - 1); // Only decrement if cartItem is greater than 0
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={cartItem}
                  className="w-20 text-center border-none outline-none"
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (!isNaN(value) && value > 0 && value <= product.stock) {
                      setCartItem(value);
                    } else if (value > product.stock) {
                      alert(`Only ${product.stock} items available in stock!`);
                      setCartItem(product.stock);
                    }
                  }}
                />
                <button
                  className="cursor-pointer text-lg py-4 px-5 active:scale-125"
                  onClick={() => setCartItem(cartItem + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <CommonBtnCart title="Add to Cart" onClick={handleAddToCart} />
              <CommonBtnCart title="Compare" icon={<BiPlus />} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;

const CommonBtnCart: React.FC<{
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}> = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="outline-1 outline-slate-300 py-4 px-9 cursor-pointer w-full rounded-lg capitalize flex items-center justify-center gap-5 bg-slate-50 duration-200 hover:bg-slate-100 hover:text-slate-500 active:scale-105"
    >
      {icon}
      {title}
    </button>
  );
};

export const SeeMoreBtn: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <>
      <button className=" capitalize text-sm py-3 px-20 active:scale-105 group/icon rounded-md text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white duration-200 border-2 border-orange-400 flex items-center justify-center gap-5">
        {title}
        <BiRightArrow className=" group-hover/icon:scale-125 group-hover/icon:translate-x-10 duration-500" />
      </button>
    </>
  );
};
