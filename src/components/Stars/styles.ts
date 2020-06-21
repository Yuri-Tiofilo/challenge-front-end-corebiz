import styled, { css } from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface PropsIconStars {
  selected: boolean;
}

export const Container = styled.button`
  height: 48px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: var(--primary);
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
`;
export const AreaStars = styled.div``;

export const Stars = styled.div``;

export const IconStarsFill = styled(AiFillStar)`
  color: var(--notification);
`;
export const IconStarsOutline = styled(AiOutlineStar)`
  color: var(--notification);
`;
