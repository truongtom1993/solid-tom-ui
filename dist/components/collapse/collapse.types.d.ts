import { BaseColorProps, SolidComponent } from '../../type';
import { CollapseVariantsProps } from './collapse';
export interface CollapseProps {
    class?: Partial<Record<'root' | 'title' | 'content', string>>;
    icon?: {
        type: CollapseVariantsProps['iconType'];
        postion?: CollapseVariantsProps['iconPosition'];
    };
    title: string;
    content: SolidComponent;
    force?: CollapseVariantsProps['forceStatus'];
    onOpen?: () => void;
    onClose?: () => void;
    id?: string;
    color?: BaseColorProps | 'transparent';
}
//# sourceMappingURL=collapse.types.d.ts.map