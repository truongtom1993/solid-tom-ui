import { BaseColorProps, SolidComponent } from '../../type';
import { JSX } from 'solid-js';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipSharedBase = {
    hidden?: boolean;
    position?: TooltipPosition;
    color?: BaseColorProps;
    zIndex?: number;
    class?: {
        root?: string;
        content?: string;
    };
};
type WithContent = {
    content: string;
    customContent?: never;
};
type WithCustomContent = {
    content?: never;
    customContent: JSX.Element;
};
type TooltipDefaultBase = TooltipSharedBase & {
    type?: 'default';
    children: JSX.Element;
};
export type TooltipDefaultProps = TooltipDefaultBase & (WithContent | WithCustomContent);
type TooltipPortalBase = TooltipSharedBase & {
    type?: 'portal';
    children: SolidComponent;
    /**
     * `id` của element cha đang có overflow-hidden gây che khuất tooltip.
     * Event listener sẽ được gán trên element đó thay vì document.
     */
    containerId: string;
};
export type TooltipPortalProps = TooltipPortalBase & (WithContent | WithCustomContent);
export type TooltipProps = TooltipDefaultProps | TooltipPortalProps;
export {};
//# sourceMappingURL=tooltip.types.d.ts.map