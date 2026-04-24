import { JSX } from 'solid-js';
import { BaseColorProps } from '../../type';
export interface SliderTooltipProps {
    hidden?: boolean;
    forceOpen?: boolean;
    formatter?: ((value: number) => string | number) | null;
    position?: 'top' | 'bottom' | 'left' | 'right';
    color?: BaseColorProps;
    class?: string;
}
export interface SliderProps {
    class?: Partial<Record<'root' | 'dot' | 'handle' | 'mark' | 'markText' | 'rail' | 'track', string>>;
    color?: BaseColorProps;
    range?: boolean;
    defaultValue?: number | [number, number];
    value?: number | [number, number];
    min?: number;
    max?: number;
    step?: number | null;
    disabled?: boolean;
    reverse?: boolean;
    orientation?: 'horizontal' | 'vertical';
    dots?: boolean;
    included?: boolean;
    marks?: Record<number, string | {
        style?: JSX.CSSProperties;
        label: string;
    }>;
    tooltip?: SliderTooltipProps;
    onChange?: (value: number | [number, number]) => void;
}
//# sourceMappingURL=slider.types.d.ts.map