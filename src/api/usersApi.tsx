import { API } from './_config';
export function fetchUser(id: number) {
  return API.get(`/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}
