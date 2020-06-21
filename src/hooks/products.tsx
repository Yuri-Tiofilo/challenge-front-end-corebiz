import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}
interface RegisterCredentials {
  email: string;
  name: string;
}

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

interface DataProductsApi {
  data: Array<DataProducts>;
}

interface ProductContextData {
  requestProducts(): void;
  data: DataProducts | undefined;
  listCart: DataProductsApi | {};
  addToCart(dataListCart: object): void;
}

const ProductsContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataProducts | undefined>(undefined);

  const [listCart, setListCart] = useState<DataProductsApi | {}>(() => {
    const products = localStorage.getItem('@Corebiz:products');

    if (products) {
      return products;
    }
    return {} as DataProducts;
  });

  const addToCart = useCallback((dataListCart: object): void => {
    localStorage.setItem('@Corebiz:products', JSON.stringify(dataListCart));

    setListCart(dataListCart);
  }, []);

  const requestProducts = useCallback(async () => {
    const response = await api.get('/api/v1/products');

    setData(response.data);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ requestProducts, data, listCart, addToCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
function useProducts(): ProductContextData {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export { ProductsProvider, useProducts };
