//for trending products -hook

import { useEffect, useState } from "react";
import { fetchRelatedProducts } from "../services/shopify";

// missions need to get 6 products
// seconed need to recreate an currosele for that current produts -4 products each time

const relatedProducts = (handle) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRelatedProducts = async () => {
      try {
        const fetchedProducts = await fetchRelatedProducts(handle);

        setProducts(fetchedProducts);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRelatedProducts();
  }, []);

  return { products, error, loading };
};
export default relatedProducts;
