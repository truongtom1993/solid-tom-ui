import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
type CheckboxProps = {
    id?: string;
    name?: string;
    defaultChecked: boolean;
    indeterminate?: boolean;
    class?: string;
    size?: CheckboxVariantsProps['size'];
    color?: CheckboxVariantsProps['color'];
    disabled?: boolean;
    onChange?: (checked: boolean | null) => void;
    value?: string;
};
declare const variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type CheckboxVariantsProps = VariantProps<typeof variants>;
export declare const Checkbox: Component<CheckboxProps>;
export {};
//# sourceMappingURL=checkbox.d.ts.map