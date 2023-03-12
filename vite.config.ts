import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: [
                    [
                        '@emotion/babel-plugin',
                        {
                            autoLabel: 'dev-only',
                            labelFormat: '[dirname]--[filename]--[local]___',
                        },
                    ],
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            features: path.resolve(__dirname, 'src/features'),
            _layout: path.resolve(__dirname, 'src/shared/_layout'),
            api: path.resolve(__dirname, 'src/shared/api'),
            components: path.resolve(__dirname, 'src/shared/components'),
            constants: path.resolve(__dirname, 'src/shared/constants'),
            hooks: path.resolve(__dirname, 'src/shared/hooks'),
            stores: path.resolve(__dirname, 'src/shared/stores'),
            types: path.resolve(__dirname, 'src/shared/types'),
            utils: path.resolve(__dirname, 'src/shared/utils'),
            assets: path.resolve(__dirname, 'src/assets'),
            src: path.resolve(__dirname, 'src'),
        },
    },
});
