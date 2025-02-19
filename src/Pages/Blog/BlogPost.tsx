import { BiCalendar, BiUser } from "react-icons/bi";
import { PiNeedle } from "react-icons/pi";

const BlogPost = () => {
  return (
    <div>
      <img
        className=" w-[100%] rounded-4xl"
        src="https://images.unsplash.com/photo-1739531722390-04a6942231e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className=" flex items-center justify-start gap-5 py-3">
        <div className=" flex items-center justify-center gap-2 text-slate-700 text-sm py-2 px-2">
          {" "}
          <BiUser /> Admin{" "}
        </div>
        <div className=" flex items-center justify-center gap-2 text-slate-700 text-sm py-2 px-2">
          {" "}
          <BiCalendar /> 14 Oct 2022{" "}
        </div>
        <div className=" flex items-center justify-center gap-2 text-slate-700 text-sm py-2 px-2">
          {" "}
          <PiNeedle /> Wood{" "}
        </div>
      </div>
      <div className=" w-[100%] space-y-2">
        <h1 className=" text-4xl capitalize">
          Going all-in with millennial design
        </h1>
        <p className=" text-[#999] text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <a
          className=" py-2 hover:px-5 duration-200 border-b-2 border-b-orange-800"
          href="#"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
