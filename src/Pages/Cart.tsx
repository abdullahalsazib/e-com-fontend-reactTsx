import { RiDeleteBin5Line } from "react-icons/ri";
import { useCart } from "../context/ProductContext";
import { Footer } from "./Footer";
import { CommonHeader, TastMonialCart } from "./Shop";
import React from "react";
import { TastMoinalObj } from "../data/data";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price! * item.quantity,
    0
  );

  return (
    <>
      <CommonHeader title="Cart" />
      <div className="flex flex-col md:flex-row items-start justify-between px-[10%] gap-10 py-20">
        {/* Cart Table Section */}
        <div className="w-full md:w-[60%]">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Product Name</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Quantity</th>
                    <th className="border p-2">Total</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className=" p-2">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-16 h-16 object-cover mx-auto"
                        />
                      </td>
                      <td className=" p-2">{item.name}</td>
                      <td className=" p-2">BDT {item.price}</td>
                      <td className=" p-2">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          className="w-16 text-center "
                          onChange={(e) =>
                            updateQuantity(item.id!, parseInt(e.target.value))
                          }
                        />
                      </td>
                      <td className=" p-2">
                        BDT {item.price! * item.quantity}
                      </td>
                      <td className=" p-2">
                        <button
                          onClick={() => removeFromCart(item.id!)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {cart.length > 0 && (
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Subtotal: BDT {subtotal}
              </h2>
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          )}
        </div>

        {/* Cart Totals Section */}
        {cart.length > 0 && (
          <div className="w-full md:w-[30%] h-full p-6 rounded-2xl bg-gray-100 shadow-lg">
            <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
            <div className="flex justify-between text-lg border-b pb-2">
              <span>Subtotal:</span>
              <span>BDT {subtotal}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-2">
              <span>Total:</span>
              <span>BDT {subtotal}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-5 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      <div className=" flex items-center justify-between flex-row bg-[#F9F1E7] py-15 px-[10%]">
        {TastMoinalObj.map((item, index) => (
          <TastMonialCart
            key={index}
            h1Title={item.title}
            pTitle={item.pTitle}
            icons={item.icons}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
