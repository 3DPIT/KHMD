import { ReactNode } from 'react';
import { MenuInfoType } from 'types/types';

export interface BtnProps {
    /**
     * 버튼의 모양을 지정합니다.
     */
    variant?: 'text' | 'contained' | 'outlined';

    /**
     * 버튼의 특정 색상을 지정합니다.
     */
    color?: 'secondary' | 'success' | 'error' | 'inherit' | 'primary' | 'info' | 'warning' | undefined;

    /**
     * 버튼의 크기를 지정합니다.
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 버튼에 클릭에 대한 것을 정의 합니다.
     */
    onClick?: () => void;

    /**
     * 상황에 맞게 컴포넌트를 넣으시면됩니다.
     */
    children?: ReactNode;

    /**
     * 시작 위치에 아이콘을 추가할 수 있습니다.
     */
    startIcon?: string;
}

export interface IconProps {
    /**
     * 대문자로 입력해주세요 ex) Add
     */
    name?: string;
}

export interface ImageProps {
    /**
     * 이미지의 링크를 입력해주세요.
     */
    src: string;

    /**
     * 이미지의 크기를 지정합니다.
     */
    size?: 'sm' | 'md' | 'lg' | 'imgLg';

    /**
     * 이미지 바탕색상을 지정합니다.
     */
    color?: string;

    bgSize: 'contain' | 'cover';
}

export interface MenuProps {
    /**
     * 메뉴바에 들어감 이름과 동작할 함수를 정의 합니다.
     */
    menuItems?: MenuInfoType[];
}

export interface LabelProps {
    /**
     * 라벨의 글씨 크기를 지정
     */
    fontSize: string;

    /**
     * 글씨의 색상을 지정
     */
    color: string;

    /**
     * 표현할 데이터를 넣습니다.
     */
    children: ReactNode;
}

export interface ProfiileProps {
    /**
     * 아바타에 들어가 이름
     */
    name?: string;

    /**
     * 글자 색을 지정
     */
    fontColor?: string;

    /**
     * 배경 색을 지정
     */
    bgColor?: string;

    /**
     * 크기를 지정 합니다.
     */
    size?: string;
    /**
     * 버튼 클릭에 대한 것을 정의 합니다.
     */
    onClick?: () => void;
}
