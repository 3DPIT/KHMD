import { Image } from './Image';
import { Meta, StoryObj } from '@storybook/react';
import logo from 'assets/flow.svg';

/**
 * 이미지 뷰어 입니다.
 */
const meta: Meta<typeof Image> = {
    title: 'shared/atoms/Image',
    component: Image,
    argTypes: {
        src: { control: { type: 'text' } },
    },
};
export default meta;

type Story = StoryObj<typeof Image>;
export const ImageMain: Story = {
    args: {
        src: logo,
        color: 'grey',
        size: 'sm',
    },
};
