import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { BadgeProps } from './badge.types';
declare const variants: (props?: ({
    size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
    variants?: "outline" | "soft" | "dashed" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariantsProps = VariantProps<typeof variants>;
export declare const Badge: Component<BadgeProps>;
export {};
//# sourceMappingURL=badge.d.ts.map