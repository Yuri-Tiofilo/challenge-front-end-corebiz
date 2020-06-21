import React, { useState, useEffect, useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import StarsComponent from '../../components/Stars';
import api from '../../services/api';

import {
  currencyFormat,
  formatPrice,
  parseStringAndTransform,
  transformPrice,
} from '../../utils/formats';
import getValidationError from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useProducts } from '../../hooks/products';

import {
  Container,
  AreaCarrousel,
  AreaGridProducts,
  CardProduct,
  AreaImage,
  Image,
  NameProduct,
  AreaStars,
  Stars,
  Price,
  Installments,
  ButtonBuy,
  ListPrice,
  Tooltip,
  AreaForm,
  FormAuth,
  Title,
  FormAuthArea,
  AreaInput,
  AreaButtom,
  TitleProducts,
  DividerProducts,
  AreaTitleProducts,
  AreaRegisterSucess,
  TitleRegisterSucess,
  TitleTooltip,
  IconStars,
} from './styles';

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
  quant: number;
  installments: Array<Installments>;
}

interface Credencials {
  email: string;
  name: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [cartSize, setCartSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorGlobal, setErrorGlobal] = useState<boolean>(false);
  const [sucessSignIn, setsucessSignIn] = useState<boolean>(false);

  const { listCart, addToCart: addToListCart } = useProducts();

  console.log(listCart);

  const { registerUser } = useAuth();

  console.log(formatPrice(199));

  console.log(`sucess ${sucessSignIn}`);

  const [dataProducts, setDataProducts] = useState<DataProducts[]>([]);

  async function requestProductsApi(): Promise<void> {
    setLoading(true);
    const response = await api.get('/api/v1/products');

    const newProducts = response.data.map((product: DataProducts) => ({
      ...product,
      quant: 0,
    }));

    console.log(newProducts);

    setDataProducts(response.data);

    setLoading(false);
  }

  useEffect(() => {
    requestProductsApi();
  }, []);

  const handleSubmitPromotion = useCallback(async (data: Credencials) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string()
          .required('Preencha com um e-mail válido')
          .email('Digite um e-mail valido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await registerUser({
        email: data.email,
        name: data.name,
      });

      setsucessSignIn(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationError(err);

        setErrorGlobal(!!errors);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  function checkProductsExists(newList: DataProducts[]): void {
    addToListCart(newList);
  }

  function addToCart(element: DataProducts, index: number): void {
    const newListProducts = dataProducts.map(
      (product, indexProduct): DataProducts => {
        if (index === indexProduct) {
          const {
            productId,
            productName,
            stars,
            imageUrl,
            listPrice,
            price,
            installments,
            quant,
          } = product;
          return {
            productId,
            productName,
            stars,
            imageUrl,
            listPrice,
            price,
            installments,
            quant: quant + 1,
          };
        }
        const {
          productId,
          productName,
          stars,
          imageUrl,
          listPrice,
          price,
          installments,
          quant,
        } = product;

        return {
          productId,
          productName,
          stars,
          imageUrl,
          listPrice,
          price,
          quant,
          installments,
        };
      },
    );
    checkProductsExists(newListProducts);
  }

  return (
    <Container>
      <Header cartSize={cartSize} />

      <AreaCarrousel>
        <Carrousel />
      </AreaCarrousel>

      <AreaTitleProducts>
        <TitleProducts>Mais Vendidos</TitleProducts>
        <DividerProducts />
      </AreaTitleProducts>

      <AreaGridProducts>
        {dataProducts.length !== 0
          ? dataProducts.map((element, index) => {
              return (
                <CardProduct key={element.productId}>
                  {index === 2 ? (
                    <Tooltip>
                      <TitleTooltip>OFF</TitleTooltip>
                    </Tooltip>
                  ) : null}
                  {index === 1 ? (
                    <Tooltip>
                      <TitleTooltip>OFF</TitleTooltip>
                    </Tooltip>
                  ) : null}
                  <AreaImage>
                    <Image src={element.imageUrl} />
                  </AreaImage>
                  <NameProduct>
                    <strong>{element.productName}</strong>
                    <StarsComponent stars_classified={element.stars} />
                    {element.listPrice !== null ? (
                      <ListPrice>
                        de R${' '}
                        {formatPrice(
                          parseStringAndTransform(String(element.listPrice)),
                        )}
                      </ListPrice>
                    ) : null}
                  </NameProduct>

                  <Price>
                    {formatPrice(
                      parseStringAndTransform(String(element.price)),
                    )}
                  </Price>
                  {element.installments.map((installment) => (
                    <Installments>
                      {installment.value ? (
                        <span>
                          ou em{' '}
                          <span>
                            {installment.quantity}x de R$
                            {transformPrice(String(installment.value))}
                          </span>
                        </span>
                      ) : (
                        <div />
                      )}
                    </Installments>
                  ))}
                  <ButtonBuy onClick={() => addToCart(element, index)}>
                    COMPRAR
                  </ButtonBuy>
                </CardProduct>
              );
            })
          : null}
      </AreaGridProducts>

      <AreaForm>
        {!sucessSignIn ? (
          <>
            <Title>Participe de nossas news com promoções e novidades!</Title>

            <FormAuth ref={formRef} onSubmit={handleSubmitPromotion}>
              <FormAuthArea>
                <AreaInput>
                  <Input name="name" placeholder="Digite seu nome" />
                  <Input name="email" placeholder="Digite seu email" />
                </AreaInput>
                <AreaButtom isError={errorGlobal}>
                  <Button type="submit">Eu quero!</Button>
                </AreaButtom>
              </FormAuthArea>
            </FormAuth>
          </>
        ) : (
          <AreaRegisterSucess>
            <TitleRegisterSucess>
              Seu e-mail foi cadastrado com sucesso! A partir de agora você
              receberá as novidade e ofertas exclusivas.
            </TitleRegisterSucess>

            <Button
              type="button"
              onClick={() => {
                setsucessSignIn(false);
              }}
            >
              Cadastrar novo e-mail
            </Button>
          </AreaRegisterSucess>
        )}
      </AreaForm>

      <Footer />
    </Container>
  );
};

export default Home;
