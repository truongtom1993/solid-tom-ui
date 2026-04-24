import { JSX } from 'solid-js';
export interface SelectZoneRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface SelectZoneProps {
    /**
     * Controlled selected keys — khi truyền vào, SelectZone sẽ đồng bộ internal
     * state theo giá trị này. Dùng cùng với `onSelect` để reset selection từ bên ngoài.
     */
    value?: Set<string>;
    /**
     * Callback khi tập hợp selected keys thay đổi.
     * Nhận Set các key đã chọn.
     */
    onSelect?: (keys: Set<string>) => void;
    /**
     * Giữ Shift/Ctrl để cộng thêm vào selection hiện tại thay vì reset.
     * Mặc định true — tức là có hỗ trợ modifier keys.
     */
    additive?: boolean;
    /**
     * Khoảng cách tính từ rìa viewport (px) bắt đầu kích hoạt auto-scroll.
     * @default 40
     */
    scrollThreshold?: number;
    /**
     * Tốc độ auto-scroll tối đa (px/frame).
     * @default 12
     */
    scrollSpeed?: number;
    /**
     * Tắt toàn bộ SelectZone.
     * @default false
     */
    disabled?: boolean;
    /**
     * Override classes cho các slot.
     * - root: wrapper div
     * - overlay: selection rectangle overlay
     */
    class?: Partial<Record<'root' | 'overlay', string>>;
    children?: JSX.Element;
}
export interface SelectZoneItemProps {
    /**
     * Định danh duy nhất cho item. Dùng để track selected state.
     */
    itemKey: string;
    /**
     * Render prop: nhận `selected` signal và trả về JSX.
     */
    children: (selected: () => boolean) => JSX.Element;
    class?: string;
}
//# sourceMappingURL=select-zone.types.d.ts.map