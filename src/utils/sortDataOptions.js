// { name: "הפופולריים ביותר", value: "most-popular" },
//   { name: "הדירוג הגבוה ביותר", value: "best-rating" },
//   { name: "החדשים ביותר", value: "newest" },
//   { name: "מחיר: מהנמוך לגבוה", value: "price-low-to-high" },
//   { name: "מחיר: מהגבוה לנמוך", value: "price-high-to-low" },

export const sortDataOptions = (sortQuery = "all", data) => {
  // Create a copy of the data array to avoid mutating the original array
  let sortedData = [...data];

  //FIXME: connect to current setup inside the filtering - not with sort
  switch (sortQuery) {
    case "all":
      return sortedData.sort(a, (b) => a.title - b.title);

    // Sort by 'createdAt' date in descending order (newest first)
    case "most-popular":
      return sortedData.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );

    case "best-rating": //FIXME: fix that after sales to see waht is the relevnt verible
      // Sort by 'sales' field in descending order (most popular first)
      sortedData.sort((a, b) => b.updatedAt - a.updatedAt);
      break;

    case "newest":
      return sortedData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      break;

    // Sort by price in ascending order (low to high)
    case "price-high-to-low":
      sortedData.sort(
        (a, b) =>
          parseFloat(b.variants[0].price.amount) -
          parseFloat(a.variants[0].price.amount)
      );
      break;
    case "price-low-to-high":
      sortedData.sort(
        (a, b) =>
          parseFloat(a.variants[0].price.amount) -
          parseFloat(b.variants[0].price.amount)
      );
      break;

    // If no match, return the original data
    default:
      return sortedData;
  }

  return sortedData;
};
