import { BaseColorProps } from '../../type';
export interface ProgressBarOptions {
    /** Màu của thanh progress. Mặc định: 'primary' */
    color?: BaseColorProps | (string & {});
    /** Chiều cao của thanh (px). Mặc định: 3 */
    height?: number;
    /** Hiệu ứng shimmer chạy trên thanh. Mặc định: true */
    shimmer?: boolean;
    /** Bo tròn đầu thanh. Mặc định: true */
    rounded?: boolean;
    /** z-index của thanh. Mặc định: 9999 */
    zIndex?: number;
    /** Thời gian fade-out khi dismiss (ms). Mặc định: 300 */
    fadeOutDuration?: number;
    /** Vị trí hiển thị. Mặc định: 'top' */
    position?: 'top' | 'bottom';
    /** Hướng fill của thanh. Mặc định: 'leftToRight' */
    direction?: 'leftToRight' | 'rightToLeft';
}
//# sourceMappingURL=progress-bar.types.d.ts.map