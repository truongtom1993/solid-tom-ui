import { FactoryOpts } from 'imask';
import { JSXElement } from 'solid-js';
import { InputVariantsProps, TextAreaVariantsProps } from './input';
import { SliderProps } from '../slider/slider.types';
import { BaseColorProps, SolidComponent } from '../../type';
export interface InputBaseProps {
    value?: string;
    variant?: InputVariantsProps['variant'];
    allowClear?: boolean;
    class?: Partial<Record<'root' | 'input', string>>;
    disabled?: boolean;
    id?: string;
    size?: InputVariantsProps['size'];
    suffixIcon?: JSXElement;
    prefixIcon?: JSXElement;
    color?: BaseColorProps;
    placeholder?: string;
    onInput?: (value: string, e: Event) => void;
    onChange?: (value: string, e: Event) => void;
    onPressEnter?: (value: string, e: KeyboardEvent) => void;
    onBlur?: (value: string, e: Event) => void;
}
export type InputTextProps = {
    type: 'text';
    maskOptions?: FactoryOpts & {
        onAccept?: (value?: string, unmaskedValue?: string) => void;
    };
    typeOrigin?: string;
} & InputBaseProps;
export type InputTextAreaProps = {
    type: 'textarea';
    size?: TextAreaVariantsProps['size'];
} & Omit<InputBaseProps, 'prefixIcon' | 'suffixIcon' | 'onPressEnter' | 'size'>;
export type InputColorProps = {
    type: 'color';
} & Omit<InputBaseProps, 'prefixIcon'>;
export type InputDateProps = {
    type: 'date';
} & InputBaseProps;
export type InputNumberProps = {
    type: 'number';
    wheel?: boolean;
    keyboard?: boolean;
    offset?: number;
    maskOptions?: {
        min?: number;
        max?: number;
        thousandsSeparator?: string;
        radix?: string;
        scale?: number;
        normalizeZeros?: boolean;
        padFractionalZeros?: boolean;
        onAccept?: (value?: string, unmaskedValue?: string) => void;
    };
} & InputBaseProps;
export type InputPasswordProps = {
    type: 'password';
} & Omit<InputBaseProps, 'suffixIcon'>;
export type InputRangeProps = {
    type: 'range';
} & SliderProps;
export type InputOTPProps = {
    color?: BaseColorProps;
    separator?: SolidComponent;
    type: 'otp';
    length?: number;
    inputMode?: 'numeric' | 'text';
    allowedChars?: RegExp;
    disabled?: boolean;
    value?: string;
    class?: Partial<Record<'root' | 'inputWrap' | 'input', string>>;
    onComplete?: (otp: string) => void;
    onChange?: (otp: string) => void;
    onBlur?: (otp: string) => void;
};
//# sourceMappingURL=input.types.d.ts.map