import Carousel from "../../components/Carousel";

// DashboardHome.tsx
const DashboardHome = () => {
  return (
    <>
      {" "}
      <Carousel />
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the Dashboard
        </h1>
        <p>Quick summary of the website activity can go here.</p>
      </div>
    </>
  );
};

export default DashboardHome;
