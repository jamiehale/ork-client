import React from 'react';
import Box from './Box';

const DialogContent = ({
  children,
}) => (
  <Box p={2}>
    {children}
  </Box>
);

export default DialogContent;
