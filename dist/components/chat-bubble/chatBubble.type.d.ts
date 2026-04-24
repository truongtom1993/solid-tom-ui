import { BaseColorProps, SolidComponent } from '../../type';
import { ChatBubbleVariantsProps } from './chatBubble';
export type ChatBubbleProps = {
    align?: ChatBubbleVariantsProps['align'];
    color?: BaseColorProps;
    avatar?: SolidComponent;
    bubble: SolidComponent;
    header?: SolidComponent;
    footer?: SolidComponent;
    class?: Partial<Record<'avatar' | 'bubble' | 'header' | 'footer', string>>;
};
//# sourceMappingURL=chatBubble.type.d.ts.map