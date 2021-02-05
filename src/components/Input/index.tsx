import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <Container isField={isField} isFocused={isFocused}>
      {Icon && <Icon size={28} />}
      <input
        autoComplete="off"
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        name={name}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
