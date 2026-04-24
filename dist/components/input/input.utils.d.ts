import { VariantProps } from 'class-variance-authority';
import { InputBaseProps } from './input.types';
export declare const inputTextVariants: (props?: ({
    size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xs" | "4xl" | null | undefined;
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "outline" | "filled" | "borderless" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputVariantsProps = VariantProps<typeof inputTextVariants>;
export declare const textareaVariants: (props?: ({
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "outline" | "filled" | "borderless" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TextAreaVariantsProps = VariantProps<typeof textareaVariants>;
export declare const DEFAULT_PROPS: Partial<InputBaseProps>;
//# sourceMappingURL=input.utils.d.ts.map