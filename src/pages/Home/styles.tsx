import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

import { FiStar } from 'react-icons/fi';
import { fromString } from 'uuidv4';

interface AreaButtonProps {
  isError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    display: flex;
    max-width: 100%;
  }
  @media (min-width: 400px) {
    display: flex;
    max-width: 100%;
  }
  @media (min-width: 800px) {
    display: flex;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    display: flex;
    max-width: 100%;
  }
`;

export const AreaCarrousel = styled.div`
  width: 100%;
  max-width: 100%;
`;

export const AreaGridProducts = styled.div`
  max-width: 900px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  margin-bottom: 20px;

  height: 353px;
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 353px;
  background: #fff;
  position: relative;

  margin-left: 25px;

  align-items: center;

  button {
    opacity: 0;
  }

  &:hover {
    background: #e6e8ea;
    cursor: pointer;
    button {
      opacity: 1;
    }
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`;
export const AreaImage = styled.div``;

export const Image = styled.img``;

export const NameProduct = styled.div`
  font-family: Nunito;
  font-style: normal;
  width: 216px;
  height: 53px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  > strong {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }
  > span {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
    text-align: center;

    color: #7a7a7a;
    margin-top: 50px;
  }
`;

export const AreaStars = styled.div``;

export const Stars = styled.div``;

export const Price = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  color: #000000;
`;
export const Installments = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  text-align: center;

  color: #7a7a7a;

  > div {
    height: 50px;
  }
`;

export const ListPrice = styled.span``;

export const ButtonBuy = styled.button`
  width: 125.28px;
  height: 32.42px;

  background: #000000;
  border-radius: 5px;
  border: 0;

  color: #fff;

  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const Tooltip = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  right: 0;

  border-top: 0px solid transparent;
  border-bottom: 60px solid transparent;
  border-right: 60px solid var(--notification);
`;

export const TitleTooltip = styled.div`
  display: block;

  position: relative;
  top: 5px;
  left: 25px;

  font-weight: bold;

  color: var(--secondary);
`;

export const AreaForm = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 146px;
  background: #f2f2f2;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;

  padding-top: 25px;

  @media (min-width: 300px) {
    display: flex;
    height: 276px;

    align-items: center;
    justify-content: space-around;
    padding-top: 5px;
  }
  @media (min-width: 400px) {
    display: flex;
    height: 276px;
    padding-top: 5px;
    align-items: center;
    justify-content: space-around;
  }
  @media (min-width: 800px) {
    display: flex;
    height: 146px;
    padding-top: 25px;
  }
  @media (min-width: 1200px) {
    display: flex;
    height: 146px;
    padding-top: 25px;
  }
`;

export const FormAuth = styled(Form)``;

export const Title = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;

  @media (min-width: 300px) {
    display: flex;
    text-align: center;
  }
  @media (min-width: 400px) {
    display: flex;
    text-align: center;
  }
  @media (min-width: 800px) {
    display: flex;
    text-align: center;
  }
  @media (min-width: 1200px) {
    display: flex;
    text-align: center;
  }
`;

export const FormAuthArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  height: 100px;

  max-width: 900px;

  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  @media (min-width: 400px) {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    max-width: 900px;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    max-width: 900px;
  }
`;

export const AreaInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (min-width: 300px) {
    display: flex;
    flex-direction: column;
    & + div {
      margin-left: 0;
    }
  }
  @media (min-width: 400px) {
    display: flex;
    flex-direction: column;
    & + div {
      margin-left: 0px;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    & + div {
      margin-left: 10px;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    & + div {
      margin-left: 10px;
    }
  }
`;
export const AreaButtom = styled.div<AreaButtonProps>`
  width: 25%;
  margin-bottom: 12px;

  @media (min-width: 300px) {
    display: flex;
    width: 100%;
  }
  @media (min-width: 400px) {
    display: flex;
    width: 100%;
  }
  @media (min-width: 800px) {
    display: flex;
    width: 25%;
  }
  @media (min-width: 1200px) {
    display: flex;
    width: 25%;
  }
  ${(props) =>
    props.isError &&
    css`
      margin-bottom: 12px;
    `}
`;

export const AreaTitleProducts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;

  width: 100%;
  justify-content: flex-start;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitleProducts = styled.div`
  font-family: 'Nunito';
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;
`;

export const DividerProducts = styled.div`
  width: 65px;
  height: 0px;
  left: 380px;
  top: 570px;

  border: 5px solid #c0c0c0;
  border-radius: 5px;
  background: #c0c0c0;
  margin-top: 2px;
`;
export const AreaRegisterSucess = styled.div`
  max-width: 338px;

  width: 100%;
`;

export const TitleRegisterSucess = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  /* or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  margin-bottom: 15px;
`;

export const IconStars = styled(FiStar)``;
