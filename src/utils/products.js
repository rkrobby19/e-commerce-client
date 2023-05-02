import { API } from './uri';

export const getProducts = async () => {
  const data = await API.get(`/products`);

  return data;
};

export const getAllProductsId = async () => {
  const { data } = await getProducts();

  const { products } = data;

  return products.map((product) => {
    return {
      params: {
        id: product._id,
      },
    };
  });
};

export const getProductById = async (id) => {
  const data = await API.get(`/products/${id}`);
  return data;
};
