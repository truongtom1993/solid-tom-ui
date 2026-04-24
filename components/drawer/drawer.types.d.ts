import { SolidComponent } from '../../type';
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerType = {
    open: boolean;
    onClose: () => void;
    placement?: DrawerPlacement;
    width?: string;
    height?: string;
    closeOnOutsideClick?: boolean;
    closable?: boolean;
    mask?: boolean;
    maskBlur?: boolean;
    header?: SolidComponent;
    body?: SolidComponent;
    footer?: SolidComponent;
    preRender?: boolean;
    class?: Partial<Record<'wrapper' | 'panel' | 'header' | 'body' | 'footer' | 'closeButton', string>>;
};
//# sourceMappingURL=drawer.types.d.ts.map