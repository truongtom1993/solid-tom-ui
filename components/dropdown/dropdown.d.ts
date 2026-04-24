import { VariantProps } from 'class-variance-authority';
import { ParentComponent } from 'solid-js';
import { DropdownProps } from './dropdown.types';
declare const variants: (props?: ({
    position?: "top" | "bottom" | "left" | "right" | null | undefined;
    align?: "start" | "end" | "center" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type DropdownVariantsProps = VariantProps<typeof variants>;
export declare const Dropdown: ParentComponent<DropdownProps>;
export {};
//# sourceMappingURL=dropdown.d.ts.map