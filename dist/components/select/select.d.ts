import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { SelectProps } from './select.types';
declare const selectVariants: (props?: ({
    variant?: "outline" | "filled" | "borderless" | "underlined" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SelectVariantsProps = VariantProps<typeof selectVariants>;
export declare const Select: Component<SelectProps>;
export {};
//# sourceMappingURL=select.d.ts.map