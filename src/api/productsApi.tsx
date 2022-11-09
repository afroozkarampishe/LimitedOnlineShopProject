import { API } from './_config';
export function fetchProducts(category: string) {
  return API.get(`/products/category/${category}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}

export function fetchAllProducts() {
  return API.get('https://fakestoreapi.com/products')
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}
