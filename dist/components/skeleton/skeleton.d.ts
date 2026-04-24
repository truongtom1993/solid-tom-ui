import { ParentComponent } from 'solid-js';
/** Layout skeleton: giao diện phức tạp gồm nhiều element */
type LayoutVariant = 'cardImage' | 'cardHorizontal' | 'profile' | 'article' | 'feedItem' | 'stat';
/** Shape skeleton: hình khối đơn giản với kích thước preset */
type ShapeVariant = 'rectangle' | 'square' | 'circle' | 'textLine' | 'textParagraph';
type LayoutSkeletonProps = {
    type: 'layout';
    variant?: LayoutVariant;
    enabled: boolean;
};
type ShapeSkeletonProps = {
    type: 'shape';
    variant?: ShapeVariant;
    enabled: boolean;
};
/** Custom skeleton: user toàn quyền cấu hình — class áp thẳng lên element skeleton */
type CustomSkeletonProps = {
    type: 'custom';
    enabled: boolean;
    class: string;
};
export type SkeletonProps = LayoutSkeletonProps | ShapeSkeletonProps | CustomSkeletonProps;
export declare const Skeleton: ParentComponent<SkeletonProps>;
export {};
//# sourceMappingURL=skeleton.d.ts.map