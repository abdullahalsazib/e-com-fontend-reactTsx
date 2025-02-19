import { CommonHeader, TastMonialCart } from "./Shop";
import { Footer } from "./Footer";
import { TastMoinalObj } from "../data/data";
import { useCart } from "../context/ProductContext";
import { GoDotFill } from "react-icons/go";
import Checkout2 from "./CheckOut2";

function Checkout() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price! * item.quantity,
    0
  );
  return (
    <>
      <div>
        <CommonHeader title="Checkout" />
      </div>
      <div className=" px-[10%] py-20">
        <h1 className="text-4xl capitalize ">Billing details</h1>
        <div className="flex items-center justify-between gap-15 py-5">
          <div className=" flex flex-col gap-4 w-[50%]">
            <div className="flex items-center justify-center gap-3">
              <BillingInputs labelTitle="First Name" type="text" isReq />
              <BillingInputs labelTitle="Last Name" type="text" isReq />
            </div>
            <BillingInputs labelTitle="Company Name" type="text" />
            <BillingInputs labelTitle="Country / Region" type="text" isReq />
            <BillingInputs labelTitle="Town / City" type="text" isReq />
            <BillingInputs labelTitle="Province" type="text" isReq />
            <BillingInputs labelTitle="ZIP code" type="text" isReq />
            <BillingInputs labelTitle="Phone" type="text" isReq />
            <BillingInputs labelTitle="Email address" type="email" isReq />
            <BillingInputs type="text" placeholder="Additional information" />
          </div>
          <div className="w-[40%] p-6 self-start rounded-2xl ">
            <div className=" flex items-center justify-between">
              <h1 className=" text-3xl capitalize">Product</h1>
              <h1 className=" text-2xl">Subtotal</h1>
            </div>
            <div className=" flex items-center justify-between py-5">
              {cart.length > 0 && (
                <div className=" w-full h-full">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between capitalize text-slate-500 pb-2 text-sm ">
                      <span>
                        {item.name}{" "}
                        <span className=" lowercase text-xs">x</span>{" "}
                        {item.quantity}
                      </span>
                      <span>BDT {item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-lg pb-2 border-t border-slate-400 py-3 mt-5">
                    <span>Subtotal:</span>
                    <span>BDT {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2">
                    <span>Total:</span>
                    <span className=" text-[#B88E2F] text-xl">
                      BDT {subtotal}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className=" w-full  py-5">
              <h1 className=" flex items-center justify-start">
                {" "}
                <GoDotFill className=" text-3xl" />
                Direct Bank Transfer
              </h1>
              <p className=" text-xs py-3 text-gray-500">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <Checkout2 />
            </div>
          </div>
        </div>
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
}

export default Checkout;

export const BillingInputs: React.FC<{
  id?: string;
  placeholder?: string;
  type: string;
  labelTitle?: string;
  isReq?: boolean;
}> = (props) => {
  return (
    <>
      <div className="w-full">
        <label htmlFor={props.id}>
          <p>
            {props.labelTitle}{" "}
            {props.isReq ? (
              <span className=" text-red-500">*</span>
            ) : (
              <span className=" text-slate-500">(Optional)</span>
            )}
          </p>
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            className=" py-4 px-7 border-1 border-slate-400 rounded-lg outline-none mt-1 w-full"
          />
        </label>
      </div>
    </>
  );
};
