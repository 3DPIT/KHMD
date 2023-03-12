import { Icon } from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * 아이콘 입니다.
 */
const meta: Meta<typeof Icon> = {
    title: 'shared/atoms/Icon',
    component: Icon,
    argTypes: {
        name: { control: { type: 'text' } },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Name: Story = {
    args: {
        name: 'Delete',
    },
};
