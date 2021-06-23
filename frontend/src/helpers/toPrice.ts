export const toPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: "currency",
    currency: "rub",
  }).format(price);
};
