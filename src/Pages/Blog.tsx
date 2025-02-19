import { CommonHeader, TastMonialCart } from "./Shop";
import { Footer } from "./Footer";
import { TastMoinalObj } from "../data/data";
import BlogPost from "./Blog/BlogPost";
import { BiSearch } from "react-icons/bi";

const Blog = () => {
  return (
    <>
      <CommonHeader title="blog" />
      <div className=" px-[10%] py-32  flex items-center justify-between  gap-15">
        <div className=" w-[80%] h-full flex items-center justify-center flex-col gap-y-20">
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <div className=" w-[40%] h-full self-start">
          <div className=" relative w-full">
            <input
              type="text"
              className=" py-3.5 px-10 rounded-full border-slate-500 focus:border-slate-950 duration-200 border-[1px] outline-none w-full"
            />
            <BiSearch className=" text-2xl absolute top-3.5 right-10 cursor-pointer" />
          </div>
          <div className=" py-10 px-3">
            <h1 className=" text-2xl capitalize">Categories</h1>
            <div className=" w-full space-y-10 py-4 px-10 text-slate-700">
              <div className=" flex items-center justify-between w-full">
                <p>Carfts</p>
                <p>3</p>
              </div>
              <div className=" flex items-center justify-between w-full">
                <p>Carfts</p>
                <p>3</p>
              </div>
              <div className=" flex items-center justify-between w-full">
                <p>Carfts</p>
                <p>3</p>
              </div>
              <div className=" flex items-center justify-between w-full">
                <p>Carfts</p>
                <p>3</p>
              </div>
            </div>
          </div>
          {/* recent post's */}
          <div className=" flex flex-col text-center justify-start gap-3">
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
            <RecentPosts />
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
};

export default Blog;

const RecentPosts = () => {
  return (
    <>
      <div className=" bg-[#f8f8f8] border-2 border-gray-50 shadow-md flex items-center justify-start gap-10 py-2 px-3 rounded-xl">
        <img
          className="w-25 rounded-2xl"
          src="https://images.unsplash.com/photo-1739531722390-04a6942231e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className=" flex items-start justify-center flex-col ">
          <h1 className=" text-xl">Title of Post</h1>
          <p className=" text-slate-700 text-xs">10 Aug 2024</p>
        </div>
      </div>
    </>
  );
};
