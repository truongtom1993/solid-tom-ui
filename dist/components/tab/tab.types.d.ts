import { BaseColorProps, SolidComponent } from '../../type';
import { TooltipProps } from '../tooltip/tooltip.types';
import { Accessor, Setter } from 'solid-js';
export type TabItem = {
    label?: string;
    key: string;
    children: SolidComponent;
    icon?: SolidComponent;
    disabled?: boolean;
    closable?: boolean;
    pinned?: boolean;
};
type TabTooltipOptions = Omit<TooltipProps, 'children'>;
type BaseTabPropsCommon = {
    color?: BaseColorProps;
    variants?: 'lift' | 'box' | 'border';
    align?: 'left' | 'center' | 'right';
    defaultActiveKey?: string;
    canAdd?: boolean;
    canPin?: boolean;
    canRename?: boolean;
    preRender?: boolean;
    onChange?: (activeKey: string) => void;
    onAdd?: () => TabItem | void;
    onRemove?: (key: string, label: string) => Promise<boolean> | boolean | void;
    onPin?: (key: string, pinned: boolean) => void;
    onRename?: (key: string, newLabel: string) => void;
    class?: Partial<Record<'root' | 'header' | 'item' | 'content' | 'addButton', string>>;
    items: Accessor<TabItem[]>;
    setItems: Setter<TabItem[]>;
};
type BaseTabWithTooltip = BaseTabPropsCommon & {
    useTooltip: true;
    tooltipOptions?: TabTooltipOptions;
};
type BaseTabWithoutTooltip = BaseTabPropsCommon & {
    useTooltip?: false;
    tooltipOptions?: never;
};
type BaseTabProps = BaseTabWithTooltip | BaseTabWithoutTooltip;
type HorizontalTabProps = BaseTabProps & {
    tabPlacement?: 'horizontal';
    position?: 'top' | 'bottom';
};
type VerticalTabProps = BaseTabProps & {
    tabPlacement: 'vertical';
    position?: 'left' | 'right';
};
export type TabProps = HorizontalTabProps | VerticalTabProps;
export {};
//# sourceMappingURL=tab.types.d.ts.map