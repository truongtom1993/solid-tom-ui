import { BaseColorProps } from '../../type';
import { SwitchVariantProps } from './switch';
type SwitchBaseProps = {
    class?: Partial<Record<'root' | 'content', string>>;
    disabled?: boolean;
    loading?: boolean;
    size?: SwitchVariantProps['size'];
    color?: BaseColorProps;
    onChange?: (checked: boolean) => void;
    onClick?: (checked: boolean) => void;
};
export type SwitchProps = SwitchBaseProps & ({
    checked: boolean;
    defaultChecked?: never;
} | {
    checked?: never;
    defaultChecked: boolean;
} | {
    checked?: never;
    defaultChecked?: never;
});
export {};
//# sourceMappingURL=switch.types.d.ts.map