import React from 'react';

import { Container } from './styles';

interface Installments {
  quantity: number;
  value: number;
}

interface DataProducts {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: Array<Installments>;
}

interface PropsListProducts {
  data?: Array<DataProducts> | null | undefined;
}

const ListProducts: React.FC<PropsListProducts> = ({ data }) => {
  console.log(typeof data);
  return <Container>Yuri</Container>;
};

export default ListProducts;
