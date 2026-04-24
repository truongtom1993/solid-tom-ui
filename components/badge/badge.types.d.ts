import { BaseColorProps, SolidComponent } from '../../type';
import { BadgeVariantsProps } from './badge';
export type BadgeProps = {
    content?: SolidComponent;
    size?: BadgeVariantsProps['size'];
    color?: BaseColorProps;
    variants?: BadgeVariantsProps['variants'];
    class?: Partial<Record<'root' | 'child', string>>;
};
//# sourceMappingURL=badge.types.d.ts.map