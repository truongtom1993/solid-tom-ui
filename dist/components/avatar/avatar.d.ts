import { VariantProps } from 'class-variance-authority';
import { Component, ParentComponent } from 'solid-js';
import { AvatarGroup, AvatarProps } from './avatar.types';
declare const variants: (props?: ({
    mask?: "heart" | "hexagon" | "squircle" | "square" | "circle" | null | undefined;
    status?: "online" | "offline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AvatarVariantsProps = VariantProps<typeof variants>;
export declare function Avatar(p: AvatarProps): ReturnType<Component<AvatarProps>>;
export declare namespace Avatar {
    var Group: (props: AvatarGroup) => ReturnType<ParentComponent>;
}
export {};
//# sourceMappingURL=avatar.d.ts.map