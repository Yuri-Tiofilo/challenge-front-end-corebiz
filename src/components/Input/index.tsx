import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container, Error, ContainerTotal } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    // se conter valor no inputRef ele entra no if se não,não.

    setIsFilled(!!inputRef.current?.value);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    // se conter valor no inputRef ele entra no if se não,não.

    setIsFilled(!!inputRef.current?.value);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <ContainerTotal
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          {...rest}
          ref={inputRef}
        />
      </Container>
      {error ? <span>{error}</span> : null}
    </ContainerTotal>
  );
};

export default Input;
