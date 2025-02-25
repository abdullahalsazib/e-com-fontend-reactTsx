import { SeeMoreBtn } from "../products/SingleProduct";
import { Footer } from "./Footer";
import ProductList from "../Dashboard/ProductList";
import {motion} from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
          initial={{scale: 0}}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
            }
          }}

          className=" px-2 md:px-5 lg:px-10 xl:px-[10%] w-full h-screen flex items-end py-10 justify-end bg-[url(/src/Images/background_home.png)] bg-center bg-cover bg-no-repeat">
        <motion.div initial={{ transform: "translateX(-50%)" }}
        animate={{
            transform: "translateX(0%)",
            transition: {
                duration: 1,
            }
        }} className="bg-[#fff3e3] duration-200 md:w-[66%] capitalize py-10 md:py-15 px-5 md:px-15 flex items-start justify-center flex-col gap-7">
          <div className=" flex items-center md:items-start justify-center flex-col gap-5">
            <p className="text-lg font-semibold text-gray-800 tracking-widest">
              new arrival
            </p>
            <h1 className=" text-4xl md:text-5xl md:text-left text-center xl:text-[52px] tracking-wide text-[#B88E2F]">
              discover our new collection
            </h1>
            <p className=" md:text-left text-center text-sm xl:text-[18px] font-semibold text-[#333333] tracking-widest ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              corrupti ipsa. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className=" w-full md:w-auto py-3 px-5 xl:py-7 xl:px-15 font-semibold lg:text-xl  text-white uppercase bg-[#B88E2F] hover:bg-white hover:border-2 hover:border-[#B88E2F] hover:text-[#B88E2F] duration-200 border-2 cursor-pointer">
            buy now
          </button>
        </motion.div>
      </motion.div>
      <div className=" md:px-5 xl:px-[10%] py-10">
        <div className=" text-center -space-y-1.5">
          <h1 className=" text-[32px] capitalize text-balance">
            Browse The Range
          </h1>
          <p className=" text-sm font-light tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:px-[10%] py-5 items-center justify-center xl:gap-5">
          <HomeCardCompo/>
          <HomeCardCompo />
          <HomeCardCompo />
        </div>
      </div>
      <div className=" xl:px-[10%] py-10">
        <h1 className=" text-[52px] text-center capitalize">Our Products</h1>
        <ProductList />
        <div className="flex items-center justify-center py-5">
          <SeeMoreBtn title="see more" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

const HomeCardCompo = () => {
  return (
    <>
      <div className="xl:py-10 px-2 opacity-70 hover:opacity-100 duration-200  cursor-pointer">
        <img
          className="rounded-lg w-full h-[500px] hover:scale-105 duration-200  "
          src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          alt="error"
          title="image"
        />
        <h1 className=" text-center py-4  text-xl text-slate-600 ">Dining</h1>
      </div>
    </>
  );
};
// 019922
