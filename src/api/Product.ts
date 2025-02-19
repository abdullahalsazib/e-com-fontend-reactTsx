import axios from "axios";

const BaseUrl = "https://e-com-backend-golang.onrender.com";
// const BaseUrl = "http://localhost:8000";
// http://localhost:8000/api/products

export interface ProductProps {
  id?: number | undefined
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
}

// **✅ Create Product**
export const createProduct = async (productData: ProductProps) => {
    return await axios.post(`${BaseUrl}/api/products`, productData, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });
};


// **✅ Get All Products**
export const getAllProducts = async () => {
  return await axios.get(`${BaseUrl}/api/products`);
};

// **✅ Get Product by ID**
export const getProductById = async (id: string) => {
  return await axios.get(`${BaseUrl}/api/products/${id}`);
};

// **✅ Update Product**
export const updateProduct = async (id: string, productData: ProductProps) => {
  return await axios.put(`${BaseUrl}/api/products/${id}`, productData, {
    withCredentials: true,
  });
};

// **✅ Delete Product**
export const deleteProduct = async (id: string) => {
  return await axios.delete(`${BaseUrl}/api/products/${id}`, {
    withCredentials: true,
  });
};
