import React, { ReactNode } from 'react';
import { Avatar, AvatarProps } from '@mui/material';
import css from './Profiile.module.css';
import styled from '@emotion/styled';
import { ProfiileProps } from 'components/types';

export function Profiile({ name = 'User', fontColor = 'white', bgColor = 'orange', size = '10', onClick }: ProfiileProps) {
    return (
        <Avatar sx={{ width: size + 'px', height: size + 'px', bgcolor: bgColor, color: fontColor }} onClick={onClick}>
            {name?.charAt(0)}
        </Avatar>
        // <CustomAvator sizes={size} bgColor={bgColor} fontColor={fontColor}>
        //     {name?.charAt(0)}
        // </CustomAvator>
    );
}

// interface MyAvatarProps {
//     size?: string;
//     bgColor?: string;
//     fontColor?: string;
// }

// const CustomAvator = styled(Avatar)(({ size, bgColor, fontColor }: MyAvatarProps) => ({
//     backgroundColor: bgColor,
//     color: fontColor,
// }));
