import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { MenuProps } from './menu.types';
declare const menuVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    direction?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type MenuVariantsProps = VariantProps<typeof menuVariants>;
export declare const Menu: Component<MenuProps>;
export {};
//# sourceMappingURL=menu.d.ts.map