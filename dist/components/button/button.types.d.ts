import { BaseColorProps, SolidComponent } from '../../type';
import { JSX, JSXElement } from 'solid-js';
import { ButtonVariantsProps } from './button';
type BaseButtonProps = {
    size?: ButtonVariantsProps['size'];
    icon?: SolidComponent;
    iconPlacement?: 'start' | 'end';
    loading?: boolean;
    variant: ButtonVariantsProps['variant'];
    color?: BaseColorProps;
    disabled?: boolean;
    onClick?: (e: MouseEvent) => void;
    class?: string;
    loadingOptions?: {
        type?: ButtonVariantsProps['loadingType'];
        size?: number;
    };
    animate?: 'none' | 'translate' | 'ripple';
};
type ButtonWithShape = BaseButtonProps & {
    shape: NonNullable<ButtonVariantsProps['shape']>;
    children?: never;
};
type ButtonWithoutShape = BaseButtonProps & {
    shape?: undefined;
    children?: JSXElement;
};
export type ButtonProps = (ButtonWithShape | ButtonWithoutShape) & Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'class' | 'disabled' | 'children'>;
export {};
//# sourceMappingURL=button.types.d.ts.map