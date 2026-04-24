import { Component } from 'solid-js';
import { CollapseProps } from './collapse.types';
import { VariantProps } from 'class-variance-authority';
declare const variants: (props?: ({
    iconType?: "plus" | "arrow" | null | undefined;
    iconPosition?: "start" | "end" | null | undefined;
    forceStatus?: "close" | "open" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type CollapseVariantsProps = VariantProps<typeof variants>;
export declare const Collapse: Component<CollapseProps>;
export {};
//# sourceMappingURL=collapse.d.ts.map