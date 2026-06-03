import { FactoryOpts } from 'imask';
import { JSXElement } from 'solid-js';
import { InputVariantsProps, TextAreaVariantsProps } from './input';
import { SliderProps } from '../slider/slider.types';
import { BaseColorProps, SolidComponent } from '../../type';
export interface InputBaseProps {
    value?: string;
    name?: string;
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
export type InputTextVariantProps = {
    maskOptions?: FactoryOpts & {
        onAccept?: (value?: string, unmaskedValue?: string) => void;
    };
    typeOrigin?: string;
    /** Override the native HTML input[type] attribute (e.g. 'password' for show/hide toggle). */
    nativeType?: string;
} & InputBaseProps;
export type InputTextAreaVariantProps = {
    size?: TextAreaVariantsProps['size'];
} & Omit<InputBaseProps, 'prefixIcon' | 'suffixIcon' | 'onPressEnter' | 'size'>;
export type InputColorVariantProps = Omit<InputBaseProps, 'prefixIcon'>;
export type InputDateVariantProps = InputBaseProps;
export type InputNumberVariantProps = {
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
export type InputPasswordVariantProps = Omit<InputBaseProps, 'suffixIcon'>;
export type InputRangeVariantProps = SliderProps;
export type InputOTPVariantProps = {
    color?: BaseColorProps;
    separator?: SolidComponent;
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
export type InputTextProps = {
    type: 'text';
} & InputTextVariantProps;
export type InputTextAreaProps = {
    type: 'textarea';
} & InputTextAreaVariantProps;
export type InputColorProps = {
    type: 'color';
} & InputColorVariantProps;
export type InputDateProps = {
    type: 'date';
} & InputDateVariantProps;
export type InputNumberProps = {
    type: 'number';
} & InputNumberVariantProps;
export type InputPasswordProps = {
    type: 'password';
} & InputPasswordVariantProps;
export type InputRangeProps = {
    type: 'range';
} & InputRangeVariantProps;
export type InputOTPProps = {
    type: 'otp';
} & InputOTPVariantProps;
//# sourceMappingURL=input.types.d.ts.map