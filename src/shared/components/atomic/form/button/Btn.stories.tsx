import { Btn } from './Btn';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * 버튼 입니다.
 */
const meta: Meta<typeof Btn> = {
    title: 'shared/atoms/Button',
    component: Btn,
    argTypes: {
        onClick: { action: 'clicked' },
        startIcon: { control: { type: 'text' } },
    },
};

export default meta;
type Story = StoryObj<typeof Btn>;

export const Labels: Story = {
    args: {
        children: 'BUTTON Label',
    },
};

export const Variant: Story = {
    args: {
        variant: 'text',
        children: 'BUTTON Variant',
    },
};

export const Color = {
    args: {
        color: 'secondary',
        children: 'BUTTON Color',
    },
};

export const Size = {
    args: {
        children: 'BUTTON Size',
    },
};

export const Clickable = {
    args: {
        children: 'Clickable Button',
        onClick: () => alert('Button clicked!'),
    },
};

export const StartIcon = {
    args: {
        children: 'Clickable Button',
        startIcon: '',
    },
};
