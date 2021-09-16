import products from "../utils/demo-data";

export function getProducts(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(fail) rej()
      res(products)
    }, 3000)
  })
}
