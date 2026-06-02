import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
type CheckboxBaseProps = {
    id?: string;
    name?: string;
    indeterminate?: boolean;
    class?: string;
    size?: CheckboxVariantsProps['size'];
    color?: CheckboxVariantsProps['color'];
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    value?: string;
};
type CheckboxUncontrolled = CheckboxBaseProps & {
    defaultChecked?: boolean;
    checked?: never;
};
type CheckboxControlled = CheckboxBaseProps & {
    checked: boolean;
    defaultChecked?: never;
};
export type CheckboxProps = CheckboxUncontrolled | CheckboxControlled;
declare const variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type CheckboxVariantsProps = VariantProps<typeof variants>;
export declare const Checkbox: Component<CheckboxProps>;
export {};
//# sourceMappingURL=checkbox.d.ts.map