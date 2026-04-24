import { JSXElement } from 'solid-js';
import { BaseColorProps, SolidComponent } from '../../type';
import { SelectVariantsProps } from './select';
export interface LabeledValue {
    value: string | number;
    label: SolidComponent;
    key?: string;
}
export interface SelectOptionType {
    label?: SolidComponent;
    value?: string | number;
    disabled?: boolean;
    class?: string;
    title?: string;
}
export interface OptGroupType {
    key?: string;
    label?: SolidComponent;
    class?: string;
    title?: string;
    options?: SelectOptionType[];
}
export interface SelectFieldNames {
    label?: string;
    value?: string;
    options?: string;
    groupLabel?: string;
}
export interface ShowSearchConfig {
    autoClearSearchValue?: boolean;
    filterOption?: boolean | ((inputValue: string, option: SelectOptionType) => boolean);
    filterSort?: (optionA: SelectOptionType, optionB: SelectOptionType, info: {
        searchValue: string;
    }) => number;
    optionFilterProp?: string | string[];
    searchValue?: string;
    onSearch?: (value: string) => void;
}
export interface FlattenOptionData {
    label?: SolidComponent;
    value?: string | number;
    disabled?: boolean;
    key?: string | number;
    groupLabel?: SolidComponent;
}
export interface TagRenderProps {
    label: SolidComponent;
    value: string | number;
    closable: boolean;
    onClose: () => void;
}
export interface LabelInValueType {
    label: SolidComponent;
    value: string | number;
    key?: string;
}
export interface SelectMethods {
    focus: () => void;
    blur: () => void;
}
export type SelectBaseProps = {
    allowClear?: boolean | {
        clearIcon?: SolidComponent;
    };
    color?: BaseColorProps;
    defaultActiveFirstOption?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    popupMatchSelectWidth?: boolean | number;
    popupRender?: (originNode: JSXElement) => JSXElement;
    fieldNames?: SelectFieldNames;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    labelInValue?: boolean;
    listHeight?: number;
    loading?: boolean;
    notFoundContent?: SolidComponent;
    open?: boolean;
    optionLabelProp?: string;
    options?: (SelectOptionType | OptGroupType)[];
    optionRender?: (option: FlattenOptionData, info: {
        index: number;
    }) => JSXElement;
    placeholder?: string;
    placement?: 'top' | 'bottom';
    prefix?: SolidComponent;
    removeIcon?: SolidComponent;
    showSearch?: boolean | ShowSearchConfig;
    size?: SelectVariantsProps['size'];
    suffixIcon?: SolidComponent;
    labelRender?: (props: LabelInValueType) => JSXElement;
    variant?: SelectVariantsProps['variant'];
    virtual?: boolean;
    blockScroll?: boolean;
    class?: Partial<Record<'root' | 'dropdownContent', string>>;
    onActive?: (value: string | number | LabeledValue) => void;
    onBlur?: (event: FocusEvent) => void;
    onChange?: (value: SelectValue, option: SelectOptionType | SelectOptionType[]) => void;
    onClear?: () => void;
    onDeselect?: (value: string | number | LabeledValue) => void;
    onOpenChange?: (open: boolean) => void;
    onFocus?: (event: FocusEvent) => void;
    onInputKeyDown?: (event: KeyboardEvent) => void;
    onSelect?: (value: string | number | LabeledValue, option: SelectOptionType) => void;
};
type SelectSingleModeProps = SelectBaseProps & {
    mode?: 'single';
    defaultValue?: string | number | LabeledValue;
    value?: string | number | LabeledValue;
    autoClearSearchValue?: never;
    allowCustomValue?: never;
    maxCount?: never;
    maxTagCount?: never;
    maxTagPlaceholder?: never;
    maxTagTextLength?: never;
    tagRender?: never;
    menuItemSelectedIcon?: never;
};
type SelectMultipleModeProps = SelectBaseProps & {
    mode: 'multiple';
    defaultValue?: string[] | number[] | LabeledValue[];
    value?: string[] | number[] | LabeledValue[];
    autoClearSearchValue?: boolean;
    allowCustomValue?: boolean;
    maxCount?: number;
    maxTagCount?: number | 'responsive';
    maxTagPlaceholder?: SolidComponent | ((omittedValues: LabeledValue[]) => SolidComponent);
    maxTagTextLength?: number;
    tagRender?: (props: TagRenderProps) => JSXElement;
    menuItemSelectedIcon?: SolidComponent;
};
export type SelectValue = string | string[] | number | number[] | LabeledValue | LabeledValue[];
export type SelectProps = SelectSingleModeProps | SelectMultipleModeProps;
export {};
//# sourceMappingURL=select.types.d.ts.map