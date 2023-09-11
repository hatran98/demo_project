export const formatCurrency = (price) => {
  price = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  return price;
};
