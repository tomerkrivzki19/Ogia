import Client from "shopify-buy";

// SHOPIFY ASTOREFONT API - for calling basic data

const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

// category is the props that was passed from the function
export const fetchProducts = async (
  category = "all",
  sortOption = "default"
) => {
  try {
    // console.log("category", category); // the props that was passed
    // // console.log("sortOption", sortOption);

    const products = await client.product.fetchAll();

    // Handle "all" category or empty category
    if (!category || category === "all") {
      return products;
    }

    // Replace dashes with spaces in the category if necessary
    const cleanedCategory = category.includes("-")
      ? category.replace(/-/g, " ")
      : category;

    // Filter products based on the cleaned category
    return products.filter(
      (product) =>
        typeof product.productType === "string" &&
        product.productType.includes(cleanedCategory) // Checks if productType includes the category
    );
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// fetch product by ID -- not in use yet!! FIXME:l
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

// fetch Latest Products
export const fetchLatestProducts = async () => {
  try {
    // Fetch all products
    const products = await client.product.fetchAll();

    // Sort products by the published date in descending order (newest first)
    const sortedProducts = products.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    // Return the last 6 published products
    return sortedProducts.slice(0, 6);
  } catch (error) {
    console.error("Error fetching latest products", error);
    throw error;
  }
};
