type ImagePreviewClassProps = {
    backdrop?: string;
    close?: string;
    box?: string;
    img?: string;
    toolbar?: string;
    toolBtn?: string;
    zoomLabel?: string;
    infoPopup?: string;
};
export type ImagePreviewProps = {
    src: string;
    imageName?: string;
    size?: string;
    createdAt?: Date | string;
    modifiedAt?: Date | string;
    onClose: () => void;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    class?: ImagePreviewClassProps;
    zIndex?: number;
};
export declare function ImagePreview(p: ImagePreviewProps): import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=image-preview.d.ts.map