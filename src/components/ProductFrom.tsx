import { useState } from "react";
import { createProduct } from "../api/Product";
import useAlertStore from "./aleartStore";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image_url: "",
  });
  const { showAlert } = useAlertStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    console.log("name ", typeof name);
    setProduct({
      ...product,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📩 Sending Product Data:", JSON.stringify(product));

    try {
      const response = await createProduct(product);
      showAlert(response.data, "info");
      alert("Product created successfully!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.response?.data?.error || "Failed to create product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
      {/* Product Name */}
      <div className="flex flex-col">
        <label htmlFor="productName">
          Product Name{" "}
          <span className="text-xl text-red-500 font-extrabold">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={product.name}
          placeholder="Enter product name.."
          onChange={handleChange}
          className="w-full outline-1 border-1 border-white focus:border-black outline-slate-300 focus:border-1 py-2 px-3 capitalize rounded-md"
        />
      </div>

      {/* Price & Stock */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-start w-full py-3">
          <label htmlFor="productPrice">
            Price <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            placeholder="Product price"
            onChange={handleChange}
            className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1 capitalize"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full py-3 px-4">
          <label htmlFor="stock">
            Stock <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            placeholder="Stock product"
            onChange={handleChange}
            className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1 capitalize"
          />
        </div>
      </div>

      {/* Image URL */}
      <div className="flex flex-col">
        <label htmlFor="productImage">
          Product Image Url{" "}
          <span className="text-xl text-red-500 font-extrabold">*</span>
        </label>
        <input
          type="text"
          name="image_url"
          value={product.image_url}
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full outline-1 border-1 border-white focus:border-black outline-slate-300 focus:border-1 py-2 px-3 lowercase rounded-md "
        />
      </div>

      {/* Description */}
      <div className="flex flex-col items-start justify-start w-full py-3">
        <label htmlFor="description">
          Description <span className="text-red-500 text-lg">*</span>
        </label>
        <textarea
          name="description"
          value={product.description}
          placeholder="Description"
          onChange={handleChange} // ✅ Fixed the onChange handler!
          rows={5}
          className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-start gap-5">
        <button
          type="submit"
          className="bg-blue-600 py-3 px-20 hover:bg-white hover:border-[1px] border-[1px] hover:text-blue-600 duration-150 hover:border-blue-600 text-white rounded-lg cursor-pointer text-sm"
        >
          Create product
        </button>
        <button
          disabled
          className="border-[1px] border-gray-300 py-3 px-20 text-gray-500 rounded-lg cursor-pointer text-sm"
        >
          Schedule
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
