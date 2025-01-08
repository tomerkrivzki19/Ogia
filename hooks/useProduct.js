// hooks/useProduct.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProductById,
  fetchTopSellingProducts,
  fetchProductByHandle,
} from "../services/shopify";

// const useProduct = (handle, productIds) => {
const useProduct = (handle) => {
  const [product, setProduct] = useState(null);
  //   const [products, setProducts] = useState([]);
  //   const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        // const decodedId = decodeURIComponent(id);
        // const productData = await fetchProductById(decodedId);
        const productData = await fetchProductByHandle(handle);

        if (!productData) {
          navigate("*");
          return;
        }

        const topProducts = await fetchTopSellingProducts(4);
        setProduct(productData);
        // setProducts(topProducts);

        // setIsFavorite(productIds.includes(decodedId)); // Check if it's a favorite
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/500"); // Navigate to a 500 error page on failure
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    loadProduct();
    //   }, [id, productIds, navigate]);
  }, [navigate]);
  // isFavorite
  //   return { product, products, setIsFavorite, loading };
  return { product, loading };
};

export default useProduct;
