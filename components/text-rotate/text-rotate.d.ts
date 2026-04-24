import { Component, JSX } from 'solid-js';
export interface TextRotateProps {
    class?: {
        root?: string;
        item?: string;
    };
    items?: TextRotateItem[];
}
type TextRotateItem = string | (() => JSX.Element);
export declare const TextRotate: Component<TextRotateProps>;
export {};
//# sourceMappingURL=text-rotate.d.ts.map