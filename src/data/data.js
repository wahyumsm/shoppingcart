const productData = [
  {
    id: 1,
    image: "https://cf.shopee.co.id/file/deb873b17062da46b4e3ec4ef430d8f0",
    name: "Blue Denim Shirt",
    sizes: ["XL", "L", "M"],
    color: ["blue", "black", "maroon"],
    price: 100000,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0256/2398/6281/products/2_d2ae38a1-f581-47f1-bb21-716c22e6793f_740x.jpg?v=1652346914",
    name: "Red Hoodie",
    sizes: ["XL", "L", "M"],
    color: ["blue", "black", "maroon"],
    price: 90000,
  },
];
const cartData = [
  {
    id: 1,
    product_id: 1,
    //JUMLAH
    amount: 1,
    total: 100000,
  },
  {
    id: 2,
    product_id: 2,
    //JUMLAH
    amount: 1,
    total: 90000,
  },
];
export { productData, cartData };
