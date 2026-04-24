import { SolidComponent } from '../../type';
import { JSX, JSXElement } from 'solid-js';
export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading' | 'blank' | 'custom';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export interface IconTheme {
    primary?: string;
    secondary?: string;
}
export type IconProps = Partial<IconTheme>;
export interface ToastData {
    type: ToastType;
    id: string;
    message: Message;
    icon?: SolidComponent;
    duration: number;
    pauseDuration: number;
    paused: boolean;
    position: ToastPosition;
    ariaProps: {
        role: 'status' | 'alert';
        'aria-live': 'assertive' | 'off' | 'polite';
    };
    style?: JSX.CSSProperties;
    class?: string;
    iconTheme?: IconTheme;
    createdAt: number;
    updatedAt?: number;
    visible: boolean;
    height?: number;
    unmountDelay?: number;
    canPause: boolean;
    showCloseIcon: boolean;
}
export type ToastOptions = Partial<Pick<ToastData, 'icon' | 'duration' | 'ariaProps' | 'class' | 'style' | 'position' | 'unmountDelay' | 'iconTheme' | 'canPause' | 'showCloseIcon'>>;
export type DefaultToastOptions = ToastOptions & {
    [key in ToastType]?: ToastOptions;
};
export type Message = ValueOrFunction<SolidComponent, ToastData>;
export type ToastHandler = (message: Message, options?: ToastOptions) => string;
export interface ToasterProps {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    gutter?: number;
    containerStyle?: JSX.CSSProperties;
    containerClassName?: string;
    maxToasts?: number;
}
export interface PromiseOptions<T> {
    loading: SolidComponent;
    success: ValueOrFunction<SolidComponent, T>;
    error: ValueOrFunction<SolidComponent, any>;
}
export interface PopShiftOptions {
    animate?: boolean;
}
export interface ToastAPI {
    (message: Message, options?: ToastOptions): string;
    success: (message: Message, options?: ToastOptions) => string;
    error: (message: Message, options?: ToastOptions) => string;
    info: (message: Message, options?: ToastOptions) => string;
    warning: (message: Message, options?: ToastOptions) => string;
    loading: (message: Message, options?: ToastOptions) => string;
    custom: (message: (toast: ToastData) => JSXElement, options?: ToastOptions) => string;
    dismiss: (toastId?: string) => void;
    remove: (toastId?: string) => void;
    pop: (options?: PopShiftOptions) => void;
    shift: (options?: PopShiftOptions) => void;
    promise: <T>(promise: Promise<T>, options: PromiseOptions<T>, toastOptions?: ToastOptions) => Promise<T>;
}
//# sourceMappingURL=toast.type.d.ts.map