import React from 'react';
import ProductDetails from '../../components/Products/ProductDetails';
import { getProductById, getAllProductsId } from '../../utils/products.js';

const ProductDetailsPage = ({ data }) => {
  return <ProductDetails data={data} />;
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  // get all possible path from id
  const paths = await getAllProductsId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await getProductById(params.id);
  return {
    props: {
      data,
    },
  };
}
