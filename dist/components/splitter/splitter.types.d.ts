import { JSX } from 'solid-js';
import { BaseColorProps } from '../../type';
export type SplitterOrientation = 'horizontal' | 'vertical';
export type CollapsibleConfig = boolean | 'auto';
export type ResizeEvent = {
    sizes: number[];
    index: number;
};
export type CollapseEvent = {
    sizes: number[];
    collapsed: boolean[];
    index: number;
};
export interface PanelProps {
    defaultSize?: number;
    size?: number;
    min?: number;
    max?: number;
    resizable?: boolean;
    collapsible?: boolean;
    children?: JSX.Element;
    class?: string;
}
type SplitterBaseProps = {
    orientation?: SplitterOrientation;
    vertical?: boolean;
    lazy?: boolean;
    size?: number[];
    onResizeStart?: (e: ResizeEvent) => void;
    onResize?: (e: ResizeEvent) => void;
    onResizeEnd?: (e: ResizeEvent) => void;
    onDraggerDoubleClick?: (index: number, sizes: number[]) => void;
    draggerIcon?: JSX.Element | (() => JSX.Element);
    color?: BaseColorProps;
    children?: JSX.Element;
    class?: Partial<Record<'root' | 'panel' | 'dragger' | 'draggerBar' | 'collapseBtn', string>>;
};
/** Uncontrolled collapse: icon buttons hoạt động bình thường */
type SplitterUncontrolledCollapse = SplitterBaseProps & {
    collapsed?: never;
    onCollapsedChange?: never;
    onCollapse?: (e: CollapseEvent) => void;
    collapsibleIcon?: {
        collapse?: JSX.Element | (() => JSX.Element);
        expand?: JSX.Element | (() => JSX.Element);
    };
    showCollapsibleIcon?: CollapsibleConfig;
};
/** Controlled collapse: caller tự quản lý trạng thái, icon buttons bị tắt */
type SplitterControlledCollapse = SplitterBaseProps & {
    /** Mảng boolean tương ứng với từng panel — true = ẩn, false = hiện */
    collapsed: boolean[];
    /** Callback khi nội bộ muốn thay đổi (không dùng khi controlled) */
    onCollapsedChange?: never;
    onCollapse?: never;
    collapsibleIcon?: never;
    showCollapsibleIcon?: never;
};
export type SplitterProps = SplitterUncontrolledCollapse | SplitterControlledCollapse;
export interface SplitterContextValue {
    orientation: SplitterOrientation;
}
export {};
//# sourceMappingURL=splitter.types.d.ts.map