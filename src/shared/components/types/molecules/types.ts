import { ReactNode } from 'react';
import { MenuInfoType } from 'types/types';

export interface ProfileMenuProps {
    /**
     * 프로필에 들어가 이름
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

    /** Menu Name정의 */
    menuItems?: MenuInfoType[];
}

export interface CardsProps {
    /**
     * Card에 들어갈 것을 넣습니다.
     * `<Button/>`컴포넘트나
     * "text" 텍스트도 가능합니다.
     */
    children?: ReactNode;

    /**
     * 배경색을 지정합니다.
     */
    bgColor: string;

    /**
     * text 색상을 지정합니다.
     */
    fontColor: string;

    /**
     * 동작할 함수를 정의 합니다.
     */
    onClick: () => void;
}

export interface SideBarProps {
    /**
     *  사이드바 상단에 위치할 이미지 경로
     */
    imgSrc: string;

    /**
     * 이미지의 백그라운드 컬러 지정
     */
    imgBgColor: string;

    /**
     * 사이드바에 구성될 컴포넌트 및 텍스트등등
     */
    children: ReactNode;
}

export interface AppBarsProps {
    /**
     * title 이름을 지정합니다.
     */
    titleText: string;

    /**
     * menu 아이콘을 눌렀을때 동작함수
     */
    menuOnClick: () => void;

    children: ReactNode;
}
