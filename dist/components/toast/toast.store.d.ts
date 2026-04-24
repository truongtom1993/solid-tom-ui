import { JSX } from 'solid-js';
import { ToastData, ToastOptions, ToastType, Message } from './toast.type';
export declare const toastStore: {
    toasts: import('solid-js').Accessor<ToastData[]>;
    createToast: (message: Message | ((toast: ToastData) => JSX.Element), type: ToastType, options?: ToastOptions) => ToastData;
    upsertToast: (toast: ToastData) => void;
    dismissToast: (toastId?: string) => void;
    removeToast: (toastId?: string) => void;
    updateToast: (toastId: string, updates: Partial<ToastData>) => void;
    pauseToast: (toastId: string) => void;
    resumeToast: (toastId: string) => void;
    dismissPop: () => void;
    removePop: () => void;
    dismissShift: () => void;
    removeShift: () => void;
};
//# sourceMappingURL=toast.store.d.ts.map