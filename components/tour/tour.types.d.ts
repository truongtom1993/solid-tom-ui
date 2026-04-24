import { JSX } from 'solid-js';
export type TourPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export interface TourStep {
    target: string;
    title?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
    placement?: TourPlacement;
    spotlightPadding?: number;
    onEnter?: (step: number) => void;
    onLeave?: (step: number) => void;
}
export interface TourProps {
    steps: TourStep[];
    onFinish?: () => void;
    onClose?: (currentStep: number) => void;
    onStepChange?: (step: number) => void;
    showClose?: boolean;
    prevLabel?: string;
    nextLabel?: string;
    doneLabel?: string;
    showProgress?: boolean;
    maskClosable?: boolean;
    class?: Partial<Record<'root' | 'mask' | 'spotlight' | 'popup' | 'header' | 'body' | 'footer' | 'progress', string>>;
}
export interface TourAPI {
    start: (stepIndex?: number) => void;
    stop: () => void;
    next: () => void;
    prev: () => void;
    goTo: (stepIndex: number) => void;
    isActive: () => boolean;
    currentStep: () => number;
}
//# sourceMappingURL=tour.types.d.ts.map