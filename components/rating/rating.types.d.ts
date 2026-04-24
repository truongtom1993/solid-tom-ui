import { BaseColorProps } from '../../type';
import { JSX } from 'solid-js';
export type RatingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RatingMask = 'star' | 'star-2' | 'heart';
export type RatingProps = {
    /** Giá trị hiện tại (controlled) */
    value?: number;
    /** Giá trị mặc định (uncontrolled) */
    defaultValue?: number;
    /** Số lượng sao, mặc định 5 */
    count?: number;
    /** Màu sắc theo DaisyUI color hoặc class Tailwind tùy chỉnh (vd: 'bg-orange-400') */
    color?: BaseColorProps | string;
    /** Kích thước */
    size?: RatingSize;
    /** Hình dạng mask */
    mask?: RatingMask;
    /** Chỉ đọc, không thể tương tác */
    readOnly?: boolean;
    /** Hỗ trợ nửa sao (bước 0.5) */
    half?: boolean;
    /** Cho phép reset về 0 khi bỏ chọn */
    allowClear?: boolean;
    /** Callback khi giá trị thay đổi */
    onChange?: (value: number) => void;
    /** CSS class cho container */
    class?: string;
    /** Thêm khoảng cách giữa các item (gap-1). Mặc định true khi mask="heart", false cho star */
    gap?: boolean;
    /** Aria label prefix cho từng sao */
    ariaLabel?: string;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>;
//# sourceMappingURL=rating.types.d.ts.map