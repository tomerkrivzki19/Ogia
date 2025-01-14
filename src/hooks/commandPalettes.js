// hooks/useProducts.js
// FIXME: STORE MAIN PAGE HOOK -- need to add a use params sorting option
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { fetchProductsBarSerch } from "../services/shopify";

// const useProducts = (sortOption, productsType) => {
const commandPalettes = (openSerchBar) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // FIXME: THINK OF A METHOD THAT WILL FIX THE RENDERS API CALLS
  const [hasFetched, setHasFetched] = useState(false); // Track if data is already fetched

  useEffect(() => {
    // Fetch products only if `openSerchBar` is true and data hasn't been fetched yet
    if (!openSerchBar || hasFetched) return;

    const loadProducts = async () => {
      //   if (hasFetched.current) return; // Skip fetch if already fetched

      try {
        const fetchedProducts = await fetchProductsBarSerch();
        setProducts(fetchedProducts);
        setHasFetched(true); // Mark as fetched
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [openSerchBar, hasFetched]);

  return { products, error, loading };
};

export default commandPalettes;
