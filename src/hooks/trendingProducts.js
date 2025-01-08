//for trending products -hook

import { useEffect, useState } from "react";
import { fetchLatestProducts } from "../services/shopify";

// missions need to get 6 products
// seconed need to recreate an currosele for that current produts -4 products each time

const trendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingProducts = async () => {
      try {
        const fetchedProducts = await fetchLatestProducts();

        setProducts(fetchedProducts);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingProducts();
  }, []);

  return { products, error, loading };
};
export default trendingProducts;
