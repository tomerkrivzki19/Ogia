import Client from "shopify-buy";

// SHOPIFY ASTOREFONT API - for calling basic data

const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export const fetchProducts = async (filterType = "all") => {
  try {
    const products = await client.product.fetchAll();
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// fetch product by ID
export const fetchProductById = async (id) => {
  try {
    const product = await client.product.fetch(id);
    return product;
  } catch (error) {
    console.error("Error fetching product by ID", error);
    throw error;
  }
};
// fetch Product By Handle
export const fetchProductByHandle = async (handle) => {
  try {
    const product = await client.product.fetchByHandle(handle);
    return product;
  } catch (error) {
    console.error("Error fetching product by handle:", error);
    throw error;
  }
};

//get top -5 products TODO:
export const fetchTopSellingProducts = async (slice) => {
  try {
    // Fetch all products
    const products = await client.product.fetchAll();

    // Sort products by a sales-related property if available (example: total sales)
    // You would need to adapt this if you have sales data available
    // For demo purposes, sorting by `title` here (not actual sales data)TODO:
    const sortedProducts = products.sort((a, b) =>
      b.title.localeCompare(a.title)
    );

    // Limit to top 5 products
    const topSellingProducts = sortedProducts.slice(0, slice);

    return topSellingProducts;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};
