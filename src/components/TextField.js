import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import FlexColumn from './FlexColumn';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  padding: ${({ theme }) => theme.space[1]}px;
`;

const Label = styled.label`
  ${color}
  ${space}
`;

const TextField = ({
  className,
  name,
  label,
  type,
  disabled,
  ...props
}) => (
  <FlexColumn className={className}>
    <Label
      htmlFor={name}
      color={disabled ? 'greys.0' : undefined}
      p={1}
    >
      {label}
    </Label>
    <Input
      type={type}
      id={name}
      name={name}
      disabled={disabled}
      {...props}
    />
  </FlexColumn>
);

TextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  type: 'text',
  disabled: false,
};

export default TextField;
