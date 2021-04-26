import React from 'react';
import Dialog from '../components/Dialog';
import DialogActions from '../components/DialogActions';
import DialogContent from '../components/DialogContent';
import DialogTitle from '../components/DialogTitle';
import Button from '../components/Button';

export default {
  title: 'Shepherd/Dialog',
  component: Dialog,
  argTypes: {
  },
};

const Template = ({
  open : disabledOpen,
  onClose : disabledOnClose,
  title,
  ...args
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        {...args}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>I have a ham radio</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
};
