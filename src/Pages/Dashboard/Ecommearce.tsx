import ProductForm from "../../components/ProductFrom";
import ProductTable from "../../products/ProductTable";
import LineFooter from "./LineFooter";

const Ecommearce = () => {
  return (
    <>
      <div className="bg-slate-100 w-full h-screen px-3 pt-2 pb-28 flex gap-5 flex-col overflow-auto">
        <div className=" flex pt-4">
          <h1 className="text-2xl">Create Product</h1>
        </div>
        <ProductForm />
        <ProductTable />
        <LineFooter />
      </div>
    </>
  );
};

export default Ecommearce;
