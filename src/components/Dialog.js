import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import FlexColumn from './FlexColumn';

const Screen = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blacks[2]};
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Window = styled.div`
  margin: auto;
  background: white;
  border: ${({ theme }) => theme.borders[1]} black;
`;

const Dialog = ({
  children,
  open,
  onClose,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Screen>
      <Window>
        <FlexColumn>
          {children}
        </FlexColumn>
      </Window>
    </Screen>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
