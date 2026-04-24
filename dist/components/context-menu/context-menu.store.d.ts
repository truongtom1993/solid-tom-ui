import { ContextRecord, RenderedItem, ContextMenuHandle } from './context-menu.types';
type MenuState = {
    x: number;
    y: number;
    items: RenderedItem[];
} | null;
export declare const contextMenuStore: {
    menuState: import('solid-js').Accessor<MenuState>;
    close: () => null;
    isOpen: () => boolean;
};
export declare function createContextMenuHandle<TContext extends ContextRecord>(): ContextMenuHandle<TContext>;
export {};
//# sourceMappingURL=context-menu.store.d.ts.map