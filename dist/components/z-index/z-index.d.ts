import { ParentComponent } from 'solid-js';
import { ZIndexType, ZIndexProps } from './z-index.types';
export { ZIndexType } from './z-index.types';
export type { ZIndexProps } from './z-index.types';
export { acquire, release } from './z-index.store';
/** Base z-index for each type group when no parent context exists. */
export declare const OFFSET: Record<ZIndexType, number>;
/**
 * ZIndex — wrapper component that renders children via Portal with an
 * auto-managed z-index from a centralized global registry.
 *
 * When `open` becomes true, it acquires the next available z-index slot
 * for the given type group. When `open` becomes false (or the component
 * unmounts), the slot is released back to the pool.
 *
 * Container types (MODAL, OVERLAY) additionally publish their z-index via
 * ZIndexContext, allowing nested popup children to auto-offset correctly.
 */
export declare const ZIndex: ParentComponent<ZIndexProps>;
//# sourceMappingURL=z-index.d.ts.map