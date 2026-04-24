import { BaseColorProps } from '../../type';
export interface IndicatorProps {
    /** Số thông báo cần hiển thị */
    count?: number;
    /** Hiển thị chính xác số lớn thay vì cắt ngắn thành 99+ (mặc định: false) */
    showExact?: boolean;
    /** Màu sắc của badge (mặc định: 'error') */
    color?: BaseColorProps;
    /** Vị trí top tính từ góc (mặc định: 0) */
    top?: number | string;
    /** Vị trí right tính từ góc (mặc định: 0) */
    right?: number | string;
    /** Tùy chỉnh class cho từng slot */
    class?: Partial<Record<'root' | 'badge', string>>;
    /** Nội dung bên trong (element cha cần position: relative) */
    children?: import('solid-js').JSX.Element;
}
//# sourceMappingURL=indicator.types.d.ts.map