import { SolidComponent } from '../../type';
import { Component } from 'solid-js';
type BreadcrumbProps = {
    items: SolidComponent[];
    class?: Partial<Record<'root' | 'item', string>>;
    separate?: SolidComponent;
    onItemClick?: (e: MouseEvent) => void;
};
export declare const Breadcrumb: Component<BreadcrumbProps>;
export {};
//# sourceMappingURL=breadcrumb.d.ts.map