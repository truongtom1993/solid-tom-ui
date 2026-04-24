import { SolidComponent } from '../../type';
import { DropdownVariantsProps } from './dropdown';
export type DropdownProps = {
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
    triggerElement: SolidComponent;
    open?: boolean;
    class?: Partial<Record<'anchor' | 'trigger' | 'content', string>>;
    position?: DropdownVariantsProps['position'];
    align?: DropdownVariantsProps['align'];
    zIndex?: number;
    blockScroll?: boolean;
    /** Khi true, click backdrop sẽ đóng toàn bộ dropdown đang mở (hữu ích cho dropdown cấp 1 trong nested menu) */
    closeAll?: boolean;
};
//# sourceMappingURL=dropdown.types.d.ts.map