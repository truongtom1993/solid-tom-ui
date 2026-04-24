import { BaseColorProps, SolidComponent } from '../../type';
import { MenuVariantsProps } from './menu';
import { Setter } from 'solid-js';
export type MenuErrorInfo = {
    /** 'root' = lỗi load root lazyItems; 'folder' = lỗi load lazy folder children */
    source: 'root' | 'folder';
    /** id của folder bị lỗi (chỉ có khi source = 'folder') */
    itemId?: string;
    /** path từ root đến folder bị lỗi (chỉ có khi source = 'folder') */
    path?: string[];
    error: unknown;
    message: string;
};
export type MenuProps = {
    id?: string;
    color?: BaseColorProps;
    size?: MenuVariantsProps['size'];
    direction?: MenuVariantsProps['direction'];
    highlightActive?: boolean;
    class?: Partial<Record<'root' | 'itemWrap' | 'itemHeader', string>>;
    defaultExpanded?: boolean;
    onItemClick?: (info: ItemClickInfo) => void;
    onError?: (info: MenuErrorInfo) => void;
    setMenuFunction?: Setter<MenuFunction | undefined>;
} & (SyncItem | AsyncItem);
export type MenuFunction = {
    focusById: (id: string) => void;
    collapseById: (id: string) => void;
    refreshById: (id: string) => void;
    refreshAll: () => void;
    collapseAll: () => void;
    expandedAll: () => void;
};
export type ItemClickInfo = {
    id: string;
    path: string[];
    type: 'file' | 'folder' | 'title';
    isExpanded?: boolean | undefined;
    data?: Record<string, any>;
};
type BaseItem = {
    id?: string;
    content: SolidComponent;
    disabled?: boolean;
    data?: Record<string, any>;
};
export type FileItem = BaseItem & {
    type: 'file';
};
type BaseFolderItem = BaseItem & {
    type: 'folder';
    defaultExpanded?: boolean;
};
type BaseTitleItem = BaseItem & {
    type: 'title';
};
type SyncFolder = BaseFolderItem & SyncItem;
type LazyFolder = BaseFolderItem & AsyncItem;
type TitleItem = BaseTitleItem & {
    items: MenuTitleItems[];
};
type MenuTitleItems = FileItem | TitleItem | SyncFolder;
type SyncItem = {
    items: MenuItem[];
    lazyItems?: never;
};
type AsyncItem = {
    items?: never;
    lazyItems: () => Promise<MenuItem[]>;
};
export type FolderItem = SyncFolder | LazyFolder;
export type MenuItem = FileItem | FolderItem | TitleItem;
export {};
//# sourceMappingURL=menu.types.d.ts.map