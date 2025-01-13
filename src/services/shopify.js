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

// fetch product by ID -- not in use yet!! FIXME:
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

// fetch related Products
export const fetchRelatedProducts = async (handle) => {
  try {
    console.log("handle", handle);

    // Fetch all products
    const products = await client.product.fetchAll();
    console.log("products", products.length);

    // Sort products by the published date in descending order (newest first)
    // const sortedProducts = products.sort(
    //   (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    // );
    const sortedProducts = products.filter((product) => {
      return product.handle !== handle;
    });
    console.log("sortedProducts", sortedProducts);

    // Return the last 6 published products
    return sortedProducts.slice(0, 6);
  } catch (error) {
    console.error("Error fetching latest products", error);
    throw error;
  }
};
// TESTING
// fetchRelatedProducts("קינוחי-כוסות-2-סינון-1");
// cart CONTEXT

// Helper function to get the cart token from cookies
const getCartTokenFromCookie = () => {
  const name = "shopifyCartToken=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};
// Helper function to store the cart token in cookies
const storeCartTokenInCookie = (token) => {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `shopifyCartToken=${token}; path=/; expires=${expires}`;
};
// Create or retrieve a checkout session
const getCheckout = async () => {
  let cartToken = getCartTokenFromCookie();
  let checkout;

  if (cartToken) {
    try {
      // Fetch the existing checkout if a cart token exists
      checkout = await client.checkout.fetch(cartToken);
    } catch (error) {
      console.error("Error fetching checkout:", error);
      checkout = null;
    }
  }

  if (!checkout || checkout.completedAt) {
    // If no valid checkout exists, create a new one
    checkout = await client.checkout.create();
    storeCartTokenInCookie(checkout.id);
  }

  return checkout.id;
};

// Retrieve cart data
export const getCartData = async () => {
  try {
    const checkoutId = await getCheckout();
    const checkout = await client.checkout.fetch(checkoutId);
    // console.log("finished get checkout ");

    return checkout.lineItems || [];
  } catch (error) {
    console.error("Error fetching cart data", error);
    throw error;
  }
};

//add to cart via shopify + cookies
// Add item to cart
export const addToCart = async (variantId, quantity) => {
  try {
    const checkoutId = await getCheckout();

    const lineItems = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    // Ensure `checkoutId` is valid before proceeding
    if (!checkoutId) {
      throw new Error("Invalid checkout ID");
    }

    await client.checkout.addLineItems(checkoutId, lineItems);
    // console.log("finished add to checkout ");
  } catch (error) {
    console.error("Error adding item to cart", error);
    throw error;
  }
};

// remove a product from the cart
export const removeProductFromCart = async (lineItemId) => {
  try {
    const checkoutId = await getCheckout();

    if (!checkoutId) {
      throw new Error("Invalid checkout ID");
    }

    // Remove the product by its line item ID
    const updatedCheckout = await client.checkout.removeLineItems(checkoutId, [
      lineItemId,
    ]);

    console.log("Product removed:", lineItemId);
    return updatedCheckout;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

export const redirectToCheckout = async () => {
  try {
    // Retrieve or create a checkout session
    const checkoutId = await getCheckout();

    // Fetch the checkout data
    const checkout = await client.checkout.fetch(checkoutId);
    // console.log("checkout", checkout);

    // Redirect the user to the checkout URL
    if (checkout && checkout.webUrl) {
      window.location.href = checkout.webUrl;
    } else {
      throw new Error("Checkout URL not found");
    }
  } catch (error) {
    console.error("Error redirecting to checkout", error);
    throw error;
  }
};
