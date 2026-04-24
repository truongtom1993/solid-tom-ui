import { JSX } from 'solid-js';
export declare enum ZIndexType {
    DROPDOWN = "dropdown",
    MODAL = "modal",
    TOOLTIP = "tooltip",
    TOAST = "toast",
    POPOVER = "popover",
    OVERLAY = "overlay"
}
type TypeDefault = {
    type: ZIndexType;
    startIndex?: never;
};
type CustomType = {
    type: string;
    startIndex: number;
};
export type ZIndexProps = {
    /** Controls Portal mounting. When false, no DOM is rendered and no z-index slot is occupied. */
    open: boolean;
    /** CSS position type for the wrapper div. Defaults to 'fixed'. */
    positioning?: 'fixed' | 'absolute';
    /** Inline position styles (top, left, right, bottom, width, height, etc.). */
    position?: JSX.CSSProperties;
    /** Additional class for the wrapper div. */
    class?: string;
    /** Callback that receives the computed z-index when the Portal mounts. */
    onZIndex?: (zIndex: number) => void;
    /**
     * When true, blocks scroll on document.body while this layer is open.
     * Scroll inside children remains functional.
     * Multiple concurrent layers with blockScroll share a reference counter,
     * so body scroll is only restored when all of them are closed.
     * Defaults to false.
     */
    blockScroll?: boolean;
    /**
     * When provided, this value is used directly as the z-index without going
     * through the auto-allocation registry. No slot is acquired or released.
     * Takes precedence over the type-based computation and startIndex.
     */
    customValue?: number;
    /**
     * When true, the Portal is always mounted in the DOM regardless of `open`.
     * Visibility is controlled via CSS (display:none when closed).
     * Z-index slot and scroll lock are still only active when `open` is true.
     */
    preRender?: boolean;
} & (TypeDefault | CustomType);
export {};
//# sourceMappingURL=z-index.types.d.ts.map