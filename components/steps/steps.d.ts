import { BaseColorProps } from '../../type';
import { Accessor, Component, JSX, Setter } from 'solid-js';
export type StepItem = {
    title?: JSX.Element;
    description?: JSX.Element;
    icon?: JSX.Element;
};
export type StepsProps = {
    type?: 'default' | 'navigation' | 'dot';
    color?: BaseColorProps;
    orientation?: 'horizontal' | 'vertical';
    total?: number;
    items?: StepItem[];
    current?: Accessor<number>;
    setCurrent?: Setter<number>;
    onChange?: (index: number) => void;
    disabled?: number[];
    activeIndex?: number[];
    class?: {
        root?: string;
        step?: string;
        icon?: string;
        title?: string;
        description?: string;
        connector?: string;
    };
};
export declare const Steps: Component<StepsProps>;
//# sourceMappingURL=steps.d.ts.map