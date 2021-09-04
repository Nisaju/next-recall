import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, Props } from '../src';
import '../dist/index.css';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: { disable: true },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <Alert children="This is just alert!" {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const CustomIcon = Template.bind({});

Default.args = {
  children: 'This is just alert!',
  variant: 'info',
} as Props;

CustomIcon.args = {
  variant: 'info',
  icon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  },
};
