import { Component } from 'solid-js';
import { InputColorProps, InputDateProps, InputNumberProps, InputOTPProps, InputPasswordProps, InputRangeProps, InputTextAreaProps, InputTextProps } from './input.types';
import { InputRadioProps } from './variants/input-radio';
type InputProps = InputTextProps | InputColorProps | InputDateProps | InputNumberProps | InputPasswordProps | InputRangeProps | InputTextAreaProps | InputOTPProps | InputRadioProps;
export declare const Input: Component<InputProps> & {
    Text: Component<InputTextProps>;
    TextArea: Component<InputTextAreaProps>;
    Color: Component<InputColorProps>;
    Date: Component<InputDateProps>;
    Number: Component<InputNumberProps>;
    Password: Component<InputPasswordProps>;
    Range: Component<InputRangeProps>;
    OTP: Component<InputOTPProps>;
    Radio: Component<InputRadioProps>;
};
export type { InputVariantsProps, TextAreaVariantsProps } from './input.utils';
//# sourceMappingURL=input.d.ts.map