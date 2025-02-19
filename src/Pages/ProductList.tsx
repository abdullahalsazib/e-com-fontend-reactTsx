import { useEffect, useState } from "react";
import { getAllProducts } from "../api/Product";
import ProductCard from "../products/ProductCard";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  stock: number;
  image_url: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
