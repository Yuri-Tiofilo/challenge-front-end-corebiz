import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  height: 48px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: var(--primary);
  width: 100%;
  font-weight: 900;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.3, '#f4f4f4')};
  }
`;
