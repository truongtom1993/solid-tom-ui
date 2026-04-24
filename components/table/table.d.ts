import { ColumnDef } from '@tanstack/solid-table';
import { JSX } from 'solid-js';
import { TableExpandedOptions, TableProps, TableSelectionOptions } from './table.types';
declare function Table<TData>(rawProps: TableProps<TData>): JSX.Element;
declare namespace Table {
    var Selection: <TData = any>(options?: TableSelectionOptions<TData>) => ColumnDef<TData, any>;
    var Expanded: <TData = any>(options: TableExpandedOptions<TData>) => ColumnDef<TData, any>;
}
export { Table };
//# sourceMappingURL=table.d.ts.map