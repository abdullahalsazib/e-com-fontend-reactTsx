import { CommonHeader } from "./Shop";
import { Footer } from "./Footer";
import { BillingInputs } from "./Checkout";

const Contact = () => {
  return (
    <>
      <div>
        <CommonHeader title="Contact" />
      </div>
      <div className="px-[10%] py-20">
        <div className=" flex items-center justify-center flex-col">
          <h1 className=" text-[42px] text-center">Get In Touch With Us</h1>
          <p className=" text-center w-1/2 text-gray-500">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 flex-row w-full py-20">
          <div className=" w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nobis?
          </div>
          <div className=" w-1/2 flex items-center justify-center flex-col gap-5">
            <BillingInputs
              type="text"
              labelTitle="Your name"
              placeholder="your name"
              isReq
            />
            <BillingInputs
              type="email"
              labelTitle="Your email"
              placeholder="example@gmail.com"
              isReq
            />
            <BillingInputs
              type="text"
              labelTitle="Subject"
              placeholder="This is an optional"
            />
            <BillingInputs
              type="text"
              labelTitle="Message"
              isReq
              placeholder="Hi! i’d like to ask about"
            />
            <button className=" bg-[#B88E2F] py-3 px-10 text-center capitalize self-start rounded-lg text-white hover:bg-[#b88f2fcc] duration-200 cursor-pointer">
              submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
