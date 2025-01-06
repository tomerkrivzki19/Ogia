import Client from "shopify-buy";

// SHOPIFY ASTOREFONT API - for calling basic data

const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export const fetchProducts = async (filterType = "all") => {
  try {
    const products = await client.product.fetchAll();
    console.log(products);
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};
