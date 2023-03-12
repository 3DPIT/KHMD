import { LabelProps } from 'components/types';

export function Label({ fontSize = '10px', color = 'black', children }: LabelProps) {
    return <label style={{ color: color, fontSize: fontSize }}>{children}</label>;
}
