import { API } from './uri';

export const getProducts = async () => {
  const data = await API.get(`/products`);

  return data;
};
