import { Image } from '../../utils/helper';
import { Component } from 'solid-js';
import { ImagePreviewProps } from '../image-preview/image-preview';
export declare const Hover3DImage: Component<{
    image: Image;
    /** Bật/tắt tính năng click để preview ảnh. @default true */
    preview?: boolean | {
        enabled: true;
        previewOptions?: ImagePreviewProps;
    };
    class?: Partial<Record<'root' | 'figure' | 'image', string>>;
}>;
//# sourceMappingURL=hover-3d-image.d.ts.map