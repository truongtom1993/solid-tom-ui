import { Component } from 'solid-js';
import { InputColorProps, InputColorVariantProps, InputDateProps, InputDateVariantProps, InputNumberProps, InputNumberVariantProps, InputOTPProps, InputOTPVariantProps, InputPasswordProps, InputPasswordVariantProps, InputRangeProps, InputRangeVariantProps, InputTextAreaProps, InputTextAreaVariantProps, InputTextProps, InputTextVariantProps } from './input.types';
import { InputRadioProps, InputRadioVariantProps } from './variants/input-radio';
type InputProps = InputTextProps | InputColorProps | InputDateProps | InputNumberProps | InputPasswordProps | InputRangeProps | InputTextAreaProps | InputOTPProps | InputRadioProps;
export declare const Input: Component<InputProps> & {
    Text: Component<InputTextVariantProps>;
    TextArea: Component<InputTextAreaVariantProps>;
    Color: Component<InputColorVariantProps>;
    Date: Component<InputDateVariantProps>;
    Number: Component<InputNumberVariantProps>;
    Password: Component<InputPasswordVariantProps>;
    Range: Component<InputRangeVariantProps>;
    OTP: Component<InputOTPVariantProps>;
    Radio: Component<InputRadioVariantProps>;
};
export type { InputVariantsProps, TextAreaVariantsProps } from './input.utils';
//# sourceMappingURL=input.d.ts.map