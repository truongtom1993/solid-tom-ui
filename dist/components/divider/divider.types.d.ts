import { JSX } from 'solid-js';
import { BaseColorProps } from '../../type';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerAlign = 'start' | 'center' | 'end';
export type DividerSlot = 'root' | 'line' | 'content';
export type DividerProps = {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
    align?: DividerAlign;
    thickness?: 1 | 2 | 3 | 4;
    color?: BaseColorProps;
    class?: Partial<Record<DividerSlot, string>>;
    children?: JSX.Element;
};
//# sourceMappingURL=divider.types.d.ts.map