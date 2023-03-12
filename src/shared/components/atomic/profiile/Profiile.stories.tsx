import { Profiile } from './Profiile';
import { Meta, StoryObj } from '@storybook/react';

/**
 * 아바타 입니다.
 */
const meta: Meta<typeof Profiile> = {
    title: 'shared/atoms/Profiile',
    component: Profiile,
    argTypes: {
        name: { control: { type: 'text' } },
        bgColor: { control: { type: 'text' } },
        fontColor: { control: { type: 'text' } },
        onClick: { action: 'clicked' },
    },
};
export default meta;

type Story = StoryObj<typeof Profiile>;

export const ProfileMain: Story = {
    args: {
        name: 'USER',
        bgColor: 'orange',
        fontColor: 'white',
        size: '30',
        onClick: () => alert('Button clicked!'),
    },
};
