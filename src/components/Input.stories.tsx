import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as Input from './Input';

export default {
  title: 'Marbella/Input',
  component: Input._,
  argTypes: {
  },
} as Meta<typeof Input>;

const Template: Story<Input.Props> = (args) => <Input._ {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success:true,
  disabled: false,
  label: "Success",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
