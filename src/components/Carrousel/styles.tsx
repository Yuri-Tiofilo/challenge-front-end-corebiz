import styled, { css } from 'styled-components';

import ImageCarrousel from '../../assets/image_2.png';

interface CircleProps {
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 430px;
  width: 100%;

  background: #f0f0f5 url(${ImageCarrousel}) no-repeat 140% bottom;
`;

export const AreaTitleCarrousel = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 430px;
  right: 450px;
  top: 81px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;

  color: #ffffff;
  position: absolute;
  width: 522px;
  height: 147px;
  left: 280px;
  top: 250px;

  span {
    font-weight: 300;
    font-size: 24px;
    opacity: 0.8;
  }
  strong {
    font-weight: 600;
    line-height: 41px;
    width: 270px;
  }
`;

export const AreaImageCarrousel = styled.div`
  position: absolute;
  background: #f787;
  right: 0;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ButtonScroll = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-end;

  position: absolute;

  width: 100%;
  height: 55%;
`;

export const Circle = styled.div<CircleProps>`
  height: 10px;
  width: 10px;
  display: flex;

  background: var(--secondary);

  ${(props) =>
    props.isFilled &&
    css`
      background: var(--notification);
    `}

  border-radius: 10px;

  & + div {
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;
