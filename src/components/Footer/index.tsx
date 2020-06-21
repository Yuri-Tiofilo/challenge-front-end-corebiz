import React from 'react';

import { FiMail, FiHeadphones } from 'react-icons/fi';
import logoCoreBiz from '../../assets/images/logo.svg';
import logoVtexfrom from '../../assets/images/logoVtex.svg';

import ButtonSecondary from '../ButtonSecondary';
import {
  Container,
  AreaLocatition,
  Title,
  DividerTitle,
  Locatiton,
  AreaFooter,
  AreaButton,
  AreaLogo,
  AreaBrand,
  TextBrand,
  Brand,
  Affiliated,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <AreaFooter>
        <AreaLocatition>
          <Title>Localização</Title>
          <DividerTitle />

          <Locatiton>
            Rua Ifigênia Maria de Oliveira 3793 Jd. Piratininga - 14403-583
            Franca SP, Brasil contato@clickqi.com.br +55 16 3713-6985
          </Locatiton>
        </AreaLocatition>

        <AreaButton>
          <ButtonSecondary icon={FiMail}>ENTRE EM CONTATO</ButtonSecondary>
          <ButtonSecondary icon={FiHeadphones}>
            CONSULTOR ONLINE
          </ButtonSecondary>
        </AreaButton>

        <AreaLogo>
          <AreaBrand>
            <TextBrand>Created by</TextBrand>
            <Brand src={logoCoreBiz} />
          </AreaBrand>
          <AreaBrand>
            <TextBrand>Powered by</TextBrand>
            <Affiliated src={logoVtexfrom} />
          </AreaBrand>
        </AreaLogo>
      </AreaFooter>
    </Container>
  );
};

export default Footer;
