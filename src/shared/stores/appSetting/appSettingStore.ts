import { create } from 'zustand';

type appSettingState = {
    isInternalApp: boolean;
};

type appSettingReduce = {};

export const appSettingStore = create<appSettingState & appSettingReduce>((set: Function, get: Function) => ({
    isInternalApp: Boolean(import.meta.env.VITE_INTERNAL_APP),
}));
