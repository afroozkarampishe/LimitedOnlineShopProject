import { API } from './_config';
export function fetchCarts(userId: number) {
  return API.get(`/carts/user/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}
export function addCart(data: any) {
  return API.post('/carts', data)
    .then((response) => response.data)
    .catch((e) => {
      throw e;
    });
}
