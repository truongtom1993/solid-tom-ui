import { Cell, Column, ColumnDef, ColumnFiltersState, Header, OnChangeFn, PaginationState, Row, RowSelectionState, SortingState, TableOptions, Table as TanstackTable, VisibilityState } from '@tanstack/solid-table';
import { JSX, JSXElement } from 'solid-js';
import { BaseColorProps } from '../../type';
import { PaginationProps } from '../pagination/pagination.types';
import { TooltipProps } from '../tooltip/tooltip.types';
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export type TableCellTooltipOptions = Omit<TooltipProps, 'children' | 'usePortal' | 'containerId' | 'content'> & {
    content?: string | ((value: unknown) => string);
};
declare module '@tanstack/solid-table' {
    interface ColumnMeta<TData, TValue> {
        fixed?: TableColumnFixed;
        align?: 'start' | 'center' | 'end';
        tooltip?: TableCellTooltipOptions;
        onCell?: (cell: Cell<TData, unknown>, rowIndex: number) => TableCellSpanResult;
        onHeaderCell?: (header: Header<TData, unknown>) => TableCellSpanResult;
        _selection?: TableSelectionOptions<TData>;
        _expanded?: TableExpandedOptions<TData>;
        /** Chiều rộng tối thiểu khi resize (px). Mặc định: 100 */
        minWidth?: number;
    }
    interface TableMeta<TData> {
        _expandApi?: {
            isRowExpanded: (rowId: string) => boolean;
            toggleRowExpanded: (rowId: string, record: TData) => void;
        };
    }
}
export interface TableSelectionOptions<TData = any> {
    type?: 'checkbox' | 'radio';
    title?: JSXElement;
    width?: string | number;
    hideSelectAll?: boolean;
    renderCell?: (checked: boolean, record: TData, index: number) => JSXElement;
}
export type TableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface TableBorder {
    outer?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}
export interface TableZebra {
    cols?: boolean;
    rows?: boolean;
}
export type TableColumnFixed = boolean | 'start' | 'end';
export interface TableScroll {
    x?: string | number | true;
    y?: string | number;
}
export interface TableVirtualOptions {
    itemSize?: number;
    overscan?: number;
}
interface TableBaseStyleProps {
    zebra?: TableZebra | boolean;
    size?: TableSize;
    border?: TableBorder | boolean;
    rounded?: string;
    showHeader?: boolean;
    virtual?: boolean | TableVirtualOptions;
    color?: BaseColorProps;
}
/**
 * When `resizable` is true (or omitted, default true), horizontal scroll (`scroll.x`) is
 * disabled — only `scroll.y` is allowed.
 * When `resizable` is explicitly false, full scroll including `scroll.x` is available.
 */
export type TableStyleProps = (TableBaseStyleProps & {
    resizable?: true;
    scroll?: Omit<TableScroll, 'x'>;
}) | (TableBaseStyleProps & {
    resizable?: false;
    scroll?: TableScroll;
});
export interface TableHeaderCellRenderProps<TData> {
    header: Header<TData, unknown>;
    column: Column<TData, unknown>;
    table: TanstackTable<TData>;
}
export interface TableCellRenderProps<TData> {
    cell: Cell<TData, unknown>;
    row: Row<TData>;
    column: Column<TData, unknown>;
    table: TanstackTable<TData>;
}
export interface TableRowRenderProps<TData> {
    row: Row<TData>;
    table: TanstackTable<TData>;
}
export interface TableClassNames {
    root?: string;
    headerPanel?: string;
    table?: string;
    thead?: string;
    tbody?: string;
    tfoot?: string;
    tr?: string;
    th?: string;
    td?: string;
    headerRow?: string;
    bodyRow?: string;
    footerRow?: string;
    empty?: string;
}
export interface TableExpandedOptions<TData = any> {
    expandedRowRender: (record: TData, index: number, indent: number, expanded: boolean) => JSX.Element | null | undefined;
    rowExpandable?: (record: TData, index: number) => boolean;
    expandIcon?: (expanded: boolean) => JSX.Element;
    width?: number;
}
export interface TableCellSpanResult {
    colSpan?: number;
    rowSpan?: number;
}
export type TableProps<TData> = TableStyleProps & {
    columns: ColumnDef<TData, any>[];
    data: TData[];
    options?: Partial<Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel'>>;
    onTableReady?: (table: TanstackTable<TData>) => void;
    enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
    rowSelection?: RowSelectionState;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    enableSorting?: boolean;
    sorting?: SortingState;
    onSortingChange?: OnChangeFn<SortingState>;
    enableColumnFilters?: boolean;
    columnFilters?: ColumnFiltersState;
    onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
    globalFilter?: string;
    onGlobalFilterChange?: OnChangeFn<string>;
    columnVisibility?: VisibilityState;
    onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
    pagination?: PaginationState;
    paginationProps?: DistributiveOmit<PaginationProps, 'current' | 'pageSize' | 'defaultCurrent' | 'defaultPageSize'> & {
        total: number;
        position?: 'start' | 'end';
    };
    defaultExpandAllRows?: boolean;
    defaultExpandedRowKeys?: string[];
    expandedRowKeys?: string[];
    onExpandedRowsChange?: (expandedKeys: string[]) => void;
    onExpand?: (expanded: boolean, record: TData) => void;
    onRowClick?: (row: Row<TData>, e: MouseEvent) => void;
    onCell?: (cell: Cell<TData, unknown>, rowIndex: number) => TableCellSpanResult;
    emptyContent?: JSXElement;
    class?: TableClassNames;
    footerPanel?: () => JSXElement;
    getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
    headerPanel?: () => JSXElement;
    getVirtualData?: () => Promise<TData[]>;
    loadingMore?: 'none' | 'auto' | 'manual';
};
export {};
//# sourceMappingURL=table.types.d.ts.map