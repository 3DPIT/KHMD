import { EmotionButton as components } from './Button.style';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon/Icon';

/**
 * 버튼 입니다.
 */
const meta: Meta<typeof components> = {
    title: 'shared/styled/Button',
    component: components,
    argTypes: {
        children: { control: { type: 'text' } },
    },
}

export default meta;
type Story = StoryObj<typeof components>;

export const Labels: Story = {
    args: {
        children:"secondary"
    },
};

export const Labels1: Story = {
    args: {
        variant: "outlined",
        children: 'Button',
        startIcon : <Icon name={"Add"}></Icon>
      },
    };
