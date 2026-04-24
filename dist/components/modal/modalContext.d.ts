import { ModalType } from './modal';
type ModalInstance = {
    destroy: () => void;
};
export declare function createModal(options: Omit<ModalType, 'open' | 'preRender'>): ModalInstance;
export declare function closeAllModals(): void;
export {};
//# sourceMappingURL=modalContext.d.ts.map