import { API } from './_config';
export function fetchCategories() {
  return API.get('/products/categories/')
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}
