import { JSXElement } from 'solid-js';
export type ContextRecord = Record<string, unknown>;
type BaseRegistryItem<TContext extends ContextRecord> = {
    key: string;
    label: string;
    when?: (ctx: TContext) => boolean;
    disabled?: (ctx: TContext) => boolean;
    shortcut?: string;
    prefixIcon?: JSXElement;
    order?: number;
    group?: string;
};
export type ActionRegistryItem<TContext extends ContextRecord> = BaseRegistryItem<TContext> & {
    type: 'item';
    onClick: (ctx: TContext) => void;
};
export type SubmenuRegistryItem<TContext extends ContextRecord> = BaseRegistryItem<TContext> & {
    type: 'submenu';
    items: RegistryItem<TContext>[];
};
export type RegistryItem<TContext extends ContextRecord> = ActionRegistryItem<TContext> | SubmenuRegistryItem<TContext>;
type BaseRenderedItem = {
    key: string;
    label: string;
    disabled?: boolean;
    shortcut?: string;
    prefixIcon?: JSXElement;
};
export type RenderedActionItem = BaseRenderedItem & {
    type: 'item';
    onClick: () => void;
};
export type RenderedSubmenuItem = BaseRenderedItem & {
    type: 'submenu';
    items: RenderedItem[];
};
export type RenderedSeparator = {
    type: 'separator';
};
export type RenderedItem = RenderedActionItem | RenderedSubmenuItem | RenderedSeparator;
export type ContextMenuHandle<TContext extends ContextRecord> = {
    register: (item: RegistryItem<TContext>) => void;
    unregister: (key: string) => void;
    trigger: (e: MouseEvent, ctx: TContext) => void;
};
export type ContextMenuProps<TContext extends ContextRecord = any> = {
    handle: ContextMenuHandle<TContext>;
    class?: Partial<Record<'content' | 'item' | 'separator' | 'submenu', string>>;
};
export {};
//# sourceMappingURL=context-menu.types.d.ts.map