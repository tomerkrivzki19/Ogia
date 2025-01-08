// hooks/useProducts.js
// FIXME: STORE MAIN PAGE HOOK -- need to add a use params sorting option
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/shopify";
// import { sortDataOptions } from "../utils/sortOptions";

// const useProducts = (sortOption, productsType) => {
const useProducts = (productsType = "all") => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(productsType);
        // const sortedProducts = sortDataOptions(sortOption, fetchedProducts);

        // setProducts(sortedProducts);
        console.log("fetched products", fetchedProducts);

        setProducts(fetchedProducts);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    //   }, [sortOption, productsType]);
  }, []);

  return { products, error, loading };
};

export default useProducts;
