import css from './Image.module.css';
import { ImageProps } from 'components/types';

export function Image({ src, size = 'sm', color = 'black', bgSize }: ImageProps) {
    const imageMain = 'imageMain';
    return (
        <div
            className={`${css[imageMain]} ${css[size]} ${css[color]}`}
            style={{
                background: `url(${src}) ${color}`,
                backgroundPosition: 'center center',
                backgroundSize: `${bgSize}`,
                backgroundRepeat: 'no-repeat',
            }}
        ></div>
    );
}
