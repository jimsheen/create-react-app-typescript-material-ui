import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Component, { TComponentProps } from './Component';

export default {
  title: 'Component',
  component: Component,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Component>;

const Template: Story<TComponentProps> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {};
