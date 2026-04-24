/**
 * Holds the z-index of the nearest ZIndex ancestor that is a container type
 * (MODAL, OVERLAY). Child ZIndex components use this to compute their own
 * z-index relative to the parent container, ensuring correct stacking in
 * nested scenarios (e.g., dropdown inside modal).
 *
 * undefined = no ZIndex container ancestor (top-level context).
 */
export declare const ZIndexContext: import('solid-js').Context<number | undefined>;
/** Returns the z-index of the nearest ZIndex container ancestor, if any. */
export declare function useParentZIndex(): number | undefined;
/**
 * Returns the z-index of the nearest ZIndex container ancestor.
 * Useful for reading the current overlay z-index level in child components.
 */
export declare function useZIndex(): number | undefined;
//# sourceMappingURL=z-index.context.d.ts.map