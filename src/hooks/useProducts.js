// hooks/useProducts.js
// FIXME: STORE MAIN PAGE HOOK -- need to add a use params sorting option
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/shopify";
import { sortDataOptions } from "../utils/sortDataOptions";

// const useProducts = (sortOption, productsType) => {
// TODO: category = "all", sortOption = "default"
const useProducts = (type, sortQuery) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(type);

        // TODO: for the existing page setup
        const sortedProducts = sortDataOptions(sortQuery, fetchedProducts);

        // setProducts(sortedProducts);

        setProducts(sortedProducts);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    //   }, [sortOption, productsType]);
  }, [sortQuery, type]);

  return { products, error, loading };
};

export default useProducts;
