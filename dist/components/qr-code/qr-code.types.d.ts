import { BaseColorProps } from '../../type';
export type QrCodeStatus = 'active' | 'loading' | 'expired' | 'scanned';
export type QrCodeRenderMode = 'canvas';
export interface QrCodeLogo {
    /** URL of the logo image to overlay at the center */
    src: string;
    /** Logo width in px relative to QR size (default: 20% of size) */
    width?: number;
    /** Logo height in px relative to QR size (default: same as width) */
    height?: number;
    /** Padding around the logo background (default: 4) */
    padding?: number;
    /** Logo background color (default: '#ffffff') */
    background?: string;
    /** Border radius of the logo container (default: 4) */
    borderRadius?: number;
}
export interface QrCodeProps {
    /** The text / URL to encode */
    value: string;
    /** Canvas size in px (width = height, default: 160) */
    size?: number;
    /** Foreground dot color — hex string (default: '#000000') */
    color?: string;
    /** Background color — hex string (default: '#ffffff') */
    bgColor?: string;
    /** Error correction level (default: 'M') */
    errorLevel?: 'L' | 'M' | 'Q' | 'H';
    /** Optional center logo configuration */
    logo?: QrCodeLogo;
    /** Component status — controls overlay state */
    status?: QrCodeStatus;
    /** Label shown in the expired overlay */
    expiredText?: string;
    /** Called when the user clicks the refresh button in expired state */
    onRefresh?: () => void;
    /** Color accent used for the status overlay icon (maps to BaseColorProps) */
    accentColor?: BaseColorProps;
    /** Slot class overrides */
    class?: Partial<Record<'root' | 'canvas' | 'overlay' | 'overlayIcon' | 'overlayText', string>>;
}
//# sourceMappingURL=qr-code.types.d.ts.map