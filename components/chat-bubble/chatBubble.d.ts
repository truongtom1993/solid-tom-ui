import { VariantProps } from 'class-variance-authority';
import { Component } from 'solid-js';
import { ChatBubbleProps } from './chatBubble.type';
declare const variants: (props?: ({
    color?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "default" | null | undefined;
    align?: "start" | "end" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ChatBubbleVariantsProps = VariantProps<typeof variants>;
export declare const ChatBubble: Component<ChatBubbleProps>;
export {};
//# sourceMappingURL=chatBubble.d.ts.map