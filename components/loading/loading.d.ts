import { BaseColorProps } from '../../type';
import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
declare const daisy_variants: (props?: ({
    variant?: "dots" | "ring" | "ball" | "bars" | "infinity" | "spinner" | "spinner-2" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const svg_size_map: {
    readonly xs: "loading-svg-xs";
    readonly sm: "loading-svg-sm";
    readonly md: "loading-svg-md";
    readonly lg: "loading-svg-lg";
    readonly xl: "loading-svg-xl";
};
type DaisyVariant = 'spinner' | 'spinner-2' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
type SvgVariant = 'spinner-3' | 'spinner-4' | 'spinner-5' | 'spinner-6';
type SizeKey = keyof typeof svg_size_map;
type LoadingProps = {
    variant?: DaisyVariant | SvgVariant;
    size?: SizeKey;
    /** Nhận BaseColorProps ('primary', 'error', ...) hoặc bất kỳ giá trị CSS color nào */
    color?: BaseColorProps | string;
    class?: string;
};
export type LoadingVariantsProps = VariantProps<typeof daisy_variants>;
export declare const Loading: Component<LoadingProps>;
export declare const Spinner: Component<{
    class?: string;
    color?: string;
}>;
export {};
//# sourceMappingURL=loading.d.ts.map