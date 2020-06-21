import styled from 'styled-components';
import { FiUser, FiMenu } from 'react-icons/fi';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;

  justify-content: center;

  background: var(--white);
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

export const AreaHeader = styled.header`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  max-width: 1100px;
  padding: 5px;
`;

export const AreaLogo = styled.div`
  width: 40%;

  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 300px) {
    display: flex;
  }
  @media (min-width: 400px) {
    display: flex;
  }
  @media (min-width: 800px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  margin-top: 5px;
`;

export const AreaInput = styled.div`
  width: 100%;

  padding: 2px;
  display: flex;

  border-bottom: 1px solid #000;

  flex-direction: row;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

export const InputSearch = styled.input`
  width: 100%;

  border: 0;
`;

export const AreaAccount = styled.div`
  display: flex;
  width: 25%;

  flex-direction: row;

  padding: 10px;

  justify-content: center;
  align-items: flex-end;
`;

export const AreaCart = styled.div`
  display: flex;
  width: 10%;

  flex-direction: row;

  position: relative;
`;

export const AreaInputSearch = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const AreaIconInput = styled.div`
  display: flex;

  width: 5%;
  justify-content: center;
`;

export const IconSearch = styled.img``;

export const Cart = styled.img``;

export const CardSize = styled.span`
  display: block;
  position: absolute;

  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: var(--notification);
  font-size: 10px;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  border-radius: 100%;
  text-align: center;
  right: 20px;
`;

export const Account = styled.span`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: var(--textMyAccount);

  &:hover {
    color: ${shade(0.3, '#070707')};
    cursor: pointer;
  }
`;

export const IconAccount = styled(FiUser)`
  margin-right: 5px;
  color: var(--primary);

  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const AreaMenu = styled.div`
  @media (min-width: 300px) {
    display: flex;
  }
  @media (min-width: 400px) {
    display: flex;
  }
  @media (min-width: 800px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const IconMenu = styled(FiMenu)``;
