import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { ButtonProps } from './button.types';
type Opacity = {
    from: string;
    to: string;
};
export declare function rippleAnimate(target: HTMLButtonElement, duration?: number, opacity?: Opacity): void;
declare const variants: (props?: ({
    size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xs" | "4xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "outline" | "soft" | "dashed" | "default" | "simple" | "solid" | "text" | "link" | null | undefined;
    shape?: "square" | "circle" | null | undefined;
    loadingType?: "dots" | "ring" | "ball" | "bars" | "infinity" | "spinner" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariantsProps = VariantProps<typeof variants>;
export declare const Button: Component<ButtonProps>;
export {};
//# sourceMappingURL=button.d.ts.map