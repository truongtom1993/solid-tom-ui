import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { TooltipProps } from './tooltip.types';
declare const tooltipVariants: (props?: ({
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
    position?: "top" | "bottom" | "left" | "right" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TooltipVariantsProps = VariantProps<typeof tooltipVariants>;
export declare const Tooltip: Component<TooltipProps>;
export {};
//# sourceMappingURL=tooltip.d.ts.map