export type AcquireResult = {
    zIndex: number;
    registryKey: string;
    offset: number;
};
/** Acquire the lowest available z-index slot for the given type + base combination. */
export declare function acquire(type: string, baseIndex: number): AcquireResult;
/** Release a previously acquired slot back to the pool. */
export declare function release(registryKey: string, offset: number): void;
/** Increment scroll lock counter. Locks body scroll on first call. */
export declare function acquireScrollLock(): void;
/** Decrement scroll lock counter. Restores body scroll when counter reaches 0. */
export declare function releaseScrollLock(): void;
//# sourceMappingURL=z-index.store.d.ts.map