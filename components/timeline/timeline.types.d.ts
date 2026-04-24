import { BaseColorProps } from '../../type';
import { JSX, JSXElement } from 'solid-js';
export type TimelineItemStatus = 'pending' | 'active' | 'done' | 'error';
export type TimelineItem = {
    /** Tiêu đề mốc (ngắn gọn) */
    title?: JSXElement;
    /** Nội dung chi tiết hoặc mô tả */
    content?: JSXElement;
    /** Nhãn thời gian (ngày/giờ hoặc khoảng thời gian) */
    timestamp?: JSXElement;
    /** Icon tuỳ chỉnh thay cho dot mặc định */
    icon?: () => JSX.Element;
    /** Màu riêng của item — ghi đè màu global */
    color?: BaseColorProps;
    /** Trạng thái item — ảnh hưởng màu & icon mặc định */
    status?: TimelineItemStatus;
    /** Đang xử lý — hiện spinner thay icon */
    loading?: boolean;
    /**
     * Vị trí nội dung của item này, ghi đè `mode` của Timeline.
     * 'start' = bên trái (vertical) hoặc phía trên (horizontal)
     * 'end'   = bên phải (vertical) hoặc phía dưới (horizontal)
     */
    position?: 'start' | 'end';
};
export type TimelineProps = {
    /** Danh sách các mốc */
    items?: TimelineItem[];
    /** Màu chủ đạo cho toàn bộ timeline */
    color?: BaseColorProps;
    /** Hướng bố cục */
    orientation?: 'vertical' | 'horizontal';
    /**
     * Vị trí nội dung so với đường trục:
     * - 'start'     — toàn bộ nội dung về một phía đầu (trái/trên)
     * - 'end'       — toàn bộ nội dung về một phía cuối (phải/dưới)
     * - 'alternate' — nội dung xen kẽ trái/phải hoặc trên/dưới (mặc định)
     */
    mode?: 'start' | 'end' | 'alternate';
    /** Đảo ngược thứ tự hiển thị */
    reverse?: boolean;
    /** Class override cho từng slot */
    class?: {
        root?: string;
        item?: string;
        dot?: string;
        connector?: string;
        label?: string;
        content?: string;
        title?: string;
        description?: string;
        timestamp?: string;
    };
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'class'>;
//# sourceMappingURL=timeline.types.d.ts.map