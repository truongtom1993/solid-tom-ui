import { SolidComponent } from '../../type';
import { Component } from 'solid-js';
type DiffProps = {
    images: SolidComponent[];
    class?: Partial<Record<'root' | 'item1' | 'item2' | 'resizer', string>>;
};
declare const Diff: Component<DiffProps>;
export { Diff };
//# sourceMappingURL=diff.d.ts.map