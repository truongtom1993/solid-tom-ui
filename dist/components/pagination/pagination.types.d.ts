import { BaseColorProps } from '../../type';
import { JSX } from 'solid-js';
export type PaginationAlign = 'start' | 'center' | 'end';
export type PaginationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PaginationItemType = 'page' | 'prev' | 'next';
export interface PaginationClass {
    root?: string;
    /** Prev / next / page number buttons */
    btn?: string;
    /** Extra class on a button when it is disabled (`.sui-pagination-btn-disabled`) */
    btnDisabled?: string;
    /** Active (current) page button */
    itemActive?: string;
    /** Ellipsis jump button */
    ellipsis?: string;
    /** Prev button specifically */
    prev?: string;
    /** Next button specifically */
    next?: string;
    /** Page-size `<select>` (default mode) or native `<select>` (fully mode) */
    sizeChanger?: string;
    /** "Total X items" text */
    total?: string;
    /** Quick-jumper wrapper `<span>` */
    jumper?: string;
    /** "Go to" label inside the quick-jumper */
    jumperLabel?: string;
    /** Number `<input>` inside the quick-jumper */
    jumperInput?: string;
    /** Pager wrapper `<span>` (contains input + slash + total) */
    simplePager?: string;
    /** Direct page-number `<input>` */
    simpleInput?: string;
    /** "/" separator */
    slash?: string;
    /** Left section wrapper (size-changer + range) */
    fullyLeft?: string;
    /** Right section wrapper (page-input + prev/next) */
    fullyRight?: string;
    /** "Items per page:" label */
    fullyLabel?: string;
    /** "X–Y of Z items" range text */
    fullyRange?: string;
    /** "of N pages" label next to page input */
    fullyPages?: string;
    /** Page-number `<input>` (underline style) */
    fullyPageInput?: string;
}
interface PaginationBaseProps {
    color?: BaseColorProps;
    current?: number;
    defaultCurrent?: number;
    pageSize?: number;
    defaultPageSize?: number;
    total?: number;
    size?: PaginationSize;
    hideOnSinglePage?: boolean;
    disabled?: boolean;
    class?: PaginationClass;
    onChange?: (page: number, pageSize: number) => void;
}
export interface PaginationDefaultProps extends PaginationBaseProps {
    mode?: 'default';
    align?: PaginationAlign;
    showLessItems?: boolean;
    showQuickJumper?: boolean | {
        goButton: JSX.Element;
    };
    showSizeChanger?: boolean | Record<string, unknown>;
    pageSizeOptions?: number[];
    totalBoundaryShowSizeChanger?: number;
    itemRender?: (page: number, type: PaginationItemType, originalElement: JSX.Element) => JSX.Element;
    showTitle?: boolean;
    showTotal?: (total: number, range: [number, number]) => JSX.Element;
    onShowSizeChange?: (current: number, size: number) => void;
}
export interface PaginationSimpleProps extends PaginationBaseProps {
    mode: 'simple';
    align?: PaginationAlign;
}
export interface PaginationFullyProps extends PaginationBaseProps {
    mode: 'fully';
    pageSizeOptions?: number[];
    onShowSizeChange?: (current: number, size: number) => void;
}
export type PaginationProps = PaginationDefaultProps | PaginationSimpleProps | PaginationFullyProps;
export {};
//# sourceMappingURL=pagination.types.d.ts.map