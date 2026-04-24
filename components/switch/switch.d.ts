import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { SwitchProps } from './switch.types';
declare const variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SwitchVariantProps = VariantProps<typeof variants>;
export declare const Switch: Component<SwitchProps>;
export {};
//# sourceMappingURL=switch.d.ts.map