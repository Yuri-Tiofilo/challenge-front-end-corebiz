import React from 'react';

import Banner from '../../assets/Banner.svg';

import {
  Container,
  AreaTitleCarrousel,
  Title,
  ButtonScroll,
  Circle,
} from './styles';

const Carrousel: React.FC = () => {
  return (
    <Container>
      <AreaTitleCarrousel src={Banner} />

      <Title>
        <span>Olá, o que você está buscando?</span>{' '}
        <strong>Criar ou migrar seu e-commerce?</strong>
      </Title>

      <ButtonScroll>
        {[1, 2, 3, 4].map((element, index) => (
          <Circle isFilled={index === 0} key={element} />
        ))}
      </ButtonScroll>
    </Container>
  );
};

export default Carrousel;
