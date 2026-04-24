export declare const dropdownStore: {
    openIds: import('solid-js').Accessor<ReadonlySet<string>>;
    open: (id: string) => ReadonlySet<string>;
    close: (id: string) => ReadonlySet<string>;
    closeAll: () => Set<string>;
    isOpen: (id: string) => boolean;
};
//# sourceMappingURL=dropdown.store.d.ts.map