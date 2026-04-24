import { SolidComponent } from '../../type';
import { AvatarVariantsProps } from './avatar';
export type AvatarProps = {
    width: string | number;
    image?: string;
    placeholder?: SolidComponent;
    mask?: AvatarVariantsProps['mask'];
    status?: AvatarVariantsProps['status'];
    class?: Partial<Record<'root' | 'avatar', string>>;
    effect?: boolean;
};
export type AvatarGroup = {
    avatars: Omit<AvatarProps, 'width' | 'status'>[];
    class?: Partial<Record<'group' | 'placeholder' | 'counter', string>>;
    counter?: number;
    width: string | number;
};
//# sourceMappingURL=avatar.types.d.ts.map