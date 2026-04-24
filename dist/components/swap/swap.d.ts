import { SolidComponent } from '../../type';
import { Component } from 'solid-js';
type SwapType = {
    item1: SolidComponent;
    item2: SolidComponent;
    effect?: 'rotate' | 'flip' | 'none';
    onChange?: (value: boolean) => void;
};
export declare const Swap: Component<SwapType>;
export {};
//# sourceMappingURL=swap.d.ts.map