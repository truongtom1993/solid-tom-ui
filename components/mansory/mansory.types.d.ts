import { JSX, Accessor } from 'solid-js';
export type MansoryBreakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MansoryResponsive<T> = Partial<Record<MansoryBreakpoint, T>>;
export interface MansoryVirtualOptions {
    overscan?: number;
}
export interface MansoryProps<T = any> {
    items: T[];
    children: (item: T, index: Accessor<number>, style: JSX.CSSProperties) => JSX.Element;
    columns?: number | MansoryResponsive<number>;
    gap?: string | MansoryResponsive<string>;
    virtual?: boolean | MansoryVirtualOptions;
    estimateItemHeight?: number;
    onLoadMore?: () => void;
    loadMoreThreshold?: number;
    class?: string;
    itemClass?: string;
    getItemKey?: (item: T, index: number) => string | number;
}
export interface MansoryItemLayout {
    index: number;
    top: number;
    left: number;
    width: number;
    height: number;
}
//# sourceMappingURL=mansory.types.d.ts.map