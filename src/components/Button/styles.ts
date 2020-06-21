import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: var(--primary);
  height: 48px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: var(--secondary);
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.3, '#070707')};
  }
`;
