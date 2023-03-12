import { Label } from './Label';
import { Meta, StoryObj } from '@storybook/react';

/**
 * 라벨 입니다.
 */
const meta: Meta<typeof Label> = {
    title: 'shared/atoms/Label',
    component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const LabelMain: Story = {
    args: {
        fontSize: '10px',
        color: 'blue',
        children: '입력된 라벨 텍스트 입니다.',
    },
};
