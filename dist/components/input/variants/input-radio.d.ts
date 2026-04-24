import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
export type InputRadioProps = {
    type: 'radio';
    size?: RadioVariantsProps['size'];
    color?: RadioVariantsProps['color'];
    id?: string;
    name: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
    class?: string;
};
declare const variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type RadioVariantsProps = VariantProps<typeof variants>;
export declare const InputRadio: Component<InputRadioProps>;
export {};
//# sourceMappingURL=input-radio.d.ts.map