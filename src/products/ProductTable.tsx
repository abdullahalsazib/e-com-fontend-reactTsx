import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaTimes, FaSync } from "react-icons/fa";
import { deleteProduct, getAllProducts, updateProduct } from "../api/Product";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Store Editing Product
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openEditModal = (product: any) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditChange = (e: any) => {
    const { name, value } = e.target;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditingProduct((prev: any) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock"
          ? value
            ? Number(value)
            : 0
          : value, // Default to 0 if empty
    }));
  };

  const handleEditSubmit = async () => {
    console.log("Sending Data to API:", editingProduct); // Debugging Line

    try {
      await updateProduct(editingProduct?.id, {
        name: editingProduct?.name || "", // Ensure valid data
        description: editingProduct?.description || "",
        price: Number(editingProduct?.price) || 0, // Ensure number
        stock: Number(editingProduct?.stock) || 0, // Ensure number
        image_url: editingProduct?.image_url || "",
      });

      fetchProducts(); // Reload Products
      closeEditModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className=" w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <button
          onClick={fetchProducts}
          className="text-blue-500 hover:text-blue-700"
          title="Reload Data"
        >
          <FaSync className="w-5 h-5" />
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">SL</th>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 text-center">#{product.id}</td>
              <td className="p-2 text-center">
                <img className="w-10" src={product.image_url} alt="" />
              </td>
              <td className="p-2 text-center">{product.name}</td>
              <td className="p-2 text-center"> 💵 {product.price}</td>
              <td className="p-2 text-center">{product.stock}</td>
              <td className="p-2 text-center flex justify-center gap-3">
                <button
                  className="text-white sm-btn bg-blue-400"
                  onClick={() => openEditModal(product)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-50 sm-btn bg-red-500"
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeEditModal}
            >
              <FaTimes />
            </button>

            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editingProduct.name}
                onChange={handleEditChange}
                className="border p-2 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={editingProduct.description}
                onChange={handleEditChange}
                className="border p-2 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={editingProduct.price}
                onChange={handleEditChange}
                className="border p-2 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={editingProduct.stock}
                onChange={handleEditChange}
                className="border p-2 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Image URL</label>
              <input
                type="text"
                name="image_url"
                value={editingProduct.image_url}
                onChange={handleEditChange}
                className="border p-2 mb-2"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleEditSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Update Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
