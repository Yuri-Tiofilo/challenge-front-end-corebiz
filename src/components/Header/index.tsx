import React from 'react';

import ImageCoreBiz from '../../assets/images/Vector.svg';
import IconSearchSvg from '../../assets/icons/iconSearch.svg';
import IconCartSvg from '../../assets/icons/iconCart.svg';

import {
  Container,
  AreaHeader,
  AreaLogo,
  Logo,
  AreaInput,
  InputSearch,
  AreaAccount,
  Account,
  IconAccount,
  AreaCart,
  Cart,
  CardSize,
  AreaInputSearch,
  AreaIconInput,
  IconSearch,
  IconMenu,
  AreaMenu,
} from './styles';

interface PropsHeader {
  cartSize: number;
}

const Header: React.FC<PropsHeader> = ({ cartSize }) => {
  return (
    <Container>
      <AreaHeader>
        <AreaMenu>
          <IconMenu />
        </AreaMenu>

        <AreaLogo>
          <Logo src={ImageCoreBiz} alt="logo-corebiz" />
        </AreaLogo>
        <AreaInputSearch>
          <AreaInput>
            <InputSearch placeholder="Digite algo" />
            <AreaIconInput>
              <IconSearch src={IconSearchSvg} />
            </AreaIconInput>
          </AreaInput>
        </AreaInputSearch>

        <AreaAccount>
          <IconAccount />
          <Account>Minha Conta</Account>
        </AreaAccount>

        <AreaCart>
          <Cart src={IconCartSvg} />
          <CardSize>{cartSize}</CardSize>
        </AreaCart>
      </AreaHeader>
    </Container>
  );
};

export default Header;
