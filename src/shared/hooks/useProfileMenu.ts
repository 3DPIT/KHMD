import { useState } from 'react';

interface ViewReturnType {
    isView: number;
    handleClick: () => void;
    handlePointOut: () => void;
}

export function useProfileMenu(): ViewReturnType {
    const [isView, setIsView] = useState<number>(0);
    const handleClick = (): void => setIsView((count) => count + 1);
    const handlePointOut = (): void => setIsView(0);

    return { isView, handleClick, handlePointOut };
}
