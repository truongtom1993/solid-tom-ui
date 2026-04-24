import { JSX, JSXElement } from 'solid-js';
export type UploadListType = 'text' | 'picture' | 'picture-card';
export type UploadFileStatus = 'uploading' | 'done' | 'error' | 'removed';
export type UploadErrorType = 'maxCount' | 'maxFileSize' | 'maxTotalSize' | 'accept';
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    type: string;
    status: UploadFileStatus;
    thumbUrl?: string;
    originFile: File;
    percent?: number;
    error?: Error;
    dimensions?: {
        width: number;
        height: number;
    };
}
export interface UploadChangeInfo {
    file: UploadFile;
    fileList: UploadFile[];
}
export interface UploadValidationError {
    type: UploadErrorType;
    file?: File;
    message: string;
}
export interface UploadClassConfig {
    wrapper?: string;
    dragger?: string;
    draggerIcon?: string;
    draggerTitle?: string;
    draggerHint?: string;
    listHeader?: string;
    listCount?: string;
    clearBtn?: string;
    textList?: string;
    textItem?: string;
    textBadge?: string;
    textName?: string;
    textSize?: string;
    pictureList?: string;
    pictureItem?: string;
    pictureThumb?: string;
    pictureIcon?: string;
    pictureInfo?: string;
    pictureActions?: string;
    progressTrack?: string;
    progressFill?: string;
    cardGrid?: string;
    card?: string;
    cardImg?: string;
    cardIcon?: string;
    cardAdd?: string;
    removeBtn?: string;
    actionBtn?: string;
    errorMessage?: string;
}
export interface UploadBaseProps {
    multiple?: boolean;
    directory?: boolean;
    accept?: string;
    listType?: UploadListType;
    showUploadList?: boolean;
    maxCount?: number;
    maxFileSize?: number;
    maxTotalSize?: number;
    showClearAll?: boolean;
    onChange?: (info: UploadChangeInfo) => void;
    onError?: (error: UploadValidationError) => void;
    customRequest?: UploadCustomRequest;
    class?: string | UploadClassConfig;
    errorMessage?: JSXElement;
    showTooltip?: boolean;
    children?: JSXElement;
}
export interface UploadProps extends UploadBaseProps {
    _type?: 'button';
}
export interface UploadDraggerProps extends UploadBaseProps {
    hint?: string;
    icon?: JSXElement;
}
export interface UploadRequestOption {
    file: File;
    onSuccess: (response?: unknown) => void;
    onError: (error: Error) => void;
    onProgress: (percent: number) => void;
}
export type UploadCustomRequest = (options: UploadRequestOption) => (() => void) | void;
export type UploadComponent = ((props: UploadProps) => JSX.Element) & {
    Dragger: (props: UploadDraggerProps) => JSX.Element;
};
//# sourceMappingURL=upload.types.d.ts.map