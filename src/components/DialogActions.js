import React from 'react';
import FlexRow from './FlexRow';

const DialogActions = ({
  children,
}) => (
  <FlexRow p={2}>
    {children}
  </FlexRow>
);

export default DialogActions;
