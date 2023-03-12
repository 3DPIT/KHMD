import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import { Icon } from '../icon/Icon';
import { BtnProps } from 'components/types';

export function Btn({ variant, color, size, onClick, children, startIcon }: BtnProps) {
    const StartIcon = startIcon ? <Icon name={startIcon} /> : null;
    return (
        <Button variant={variant} color={color} size={size} onClick={onClick} startIcon={StartIcon}>
            {children}
        </Button>
    );
}
