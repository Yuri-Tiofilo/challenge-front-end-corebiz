import React, { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  loading,
  icon: Icon,
}) => {
  return (
    <Container type="submit">
      {Icon && <Icon size={20} style={{ marginRight: 20 }} />}
      {children}
    </Container>
  );
};

export default ButtonSecondary;
