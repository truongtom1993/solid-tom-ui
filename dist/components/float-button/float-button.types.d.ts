import { SolidComponent } from '../../type';
type FloatButtonBaseProps = {
    color?: string;
    size?: number;
    icon?: SolidComponent;
    animate?: 'ripple' | 'pulse' | 'bounce' | 'heartBeat' | 'headShake' | 'swing' | 'jello' | 'none';
    class?: string;
    onClickOpen?: (e: MouseEvent) => void;
    badge?: {
        class?: string;
        count?: number;
        animate?: 'bounce' | 'heartBeat' | 'swing' | 'jello' | 'none';
    };
};
type FloatButtonSingleProps = FloatButtonBaseProps & {
    type: 'single';
};
type CloseIcon = {
    label: string;
    icon: SolidComponent;
    color?: string;
    onClickClose?: (e: MouseEvent) => void;
};
type FloatButtonDefaultProps = FloatButtonBaseProps & {
    type: 'default';
    actions?: Array<SolidComponent>;
} & {
    closeIcon?: CloseIcon;
};
type FloatButtonFlowerProps = FloatButtonBaseProps & {
    type: 'flower';
    /**
     * Danh sách các action buttons
     * @warning Nên truyền actions là các button hình tròn và tối đa 4 button để tránh vỡ giao diện
     */
    actions?: Array<SolidComponent>;
} & {
    closeIcon?: CloseIcon;
};
export type FloatButtonProps = FloatButtonSingleProps | FloatButtonDefaultProps | FloatButtonFlowerProps;
export {};
//# sourceMappingURL=float-button.types.d.ts.map