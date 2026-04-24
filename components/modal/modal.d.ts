import { SolidComponent } from '../../type';
import { AnimationConfig } from '../../utils/helper';
import { Component } from 'solid-js';
export type ModalType = {
    onClose: () => void;
    width?: string;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    closable?: boolean;
    header?: SolidComponent;
    body?: SolidComponent;
    footer?: SolidComponent;
    open?: boolean;
    mask?: boolean | {
        enabled: boolean;
        blur: boolean;
    };
    class?: Partial<Record<'wrapper' | 'modal' | 'header' | 'body' | 'footer' | 'closeButton', string>>;
    preRender?: boolean;
    animate?: Omit<AnimationConfig, 'name'> & {
        name: AnimateType;
    };
};
type AnimateType = 'none' | 'lightSpeedInRight' | 'lightSpeedInLeft' | 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'fadeInUp' | 'bounceIn' | 'scaleInCenter' | 'slideInFwdCenter' | 'slideInBck' | 'tiltIn' | 'swingInRightBck' | 'puffInCenter' | 'scaleInBl';
declare const ComponentModal: Component<ModalType>;
export declare const Modal: (p: ModalType) => import("solid-js").JSX.Element;
export { ComponentModal };
//# sourceMappingURL=modal.d.ts.map