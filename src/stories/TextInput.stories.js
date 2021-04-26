import React from 'react';

import TextField from '../components/TextField';

export default {
  title: 'Shepherd/TextField',
  component: TextField,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  label: 'Text Field',
};

export const Password = Template.bind({});
Password.args = {
  name: 'password',
  type: 'password',
  label: 'Password'
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled',
  label: 'Disabled',
  disabled: true,
};
