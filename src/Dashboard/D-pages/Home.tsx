import { BsBox } from "react-icons/bs";
import MyChart from "./MyChart";

const Home = () => {
  return (
    <div className=" w-full h-full">
      <div className=" flex items-center justify-between gap-5">
        <div className=" flex flex-row  w-[70%] h-[500px]">
          <div className=" w-full bg-[#fff] shadow-lg inset-shadow-2xs rounded-lg dark:bg-[#273142] dark:text-white flex items-center justify-center gap-2">
            <MyChart />
            <div className=" w-full flex-col flex items-center justify-between h-full border-l-[1px] dark:border-slate-950 border-slate-300 py-4">
              <div className=" w-full h-full">
                <div className="flex justify-between items-center border-b-[1px] dark:border-slate-950 border-slate-300 h-1/2 px-10">
                  <ChartCard />
                  <ChartCard />
                </div>
                <div className="flex justify-between items-center h-1/2 px-10">
                  <ChartCard />
                  <ChartCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[30%] h-full self-start  bg-[#fff] dark:bg-[#273142] shadow-lg rounded-lg inset-shadow-2xs flex flex-col justify-between gap-10">
          <ChartCard />
          <ChartCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

const ChartCard = () => {
  return (
    <>
      <div className="flex items-start justify-start flex-col gap-2 p-2">
        <div className="flex items-start flex-col gap-2">
          <div className="text-blue-600 bg-blue-200 p-3 ring-[1px] ring-blue-300 rounded-sm">
            <BsBox />
          </div>
          <h1 className=" text-lg capitalize">Total Products</h1>
          <h2 className="text-3xl">300</h2>
        </div>
        <p className=" text-[15px] text-slate-400">
          Increase by <span className=" text-green-500">+200</span> this week
        </p>
      </div>
    </>
  );
};
