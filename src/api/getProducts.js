import products from "../utils/demo-data";

export function getProducts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products)
    }, 3000)
  })
}
