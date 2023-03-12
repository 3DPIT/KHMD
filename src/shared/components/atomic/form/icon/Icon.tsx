import React, { ReactNode } from 'react';
import * as MuiIcons from '@mui/icons-material';
import { IconProps } from 'components/types';

export const Icon = ({ name }: IconProps) => {
    const IconComponent = MuiIcons[name as keyof typeof MuiIcons];
    if (!IconComponent) {
        return <></>;
    }
    return <IconComponent />;
};
