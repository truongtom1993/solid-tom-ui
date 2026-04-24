import { Image } from '../../utils/helper';
import { Setter } from 'solid-js';
type CarouselBaseProps = {
    images: Image[];
    class?: Partial<Record<'root' | 'item', string>>;
    arrows?: boolean;
    autoplay?: boolean | {
        dotDuration?: boolean;
    };
    autoplaySpeed?: number;
    dots?: boolean;
    infinite?: boolean;
    effect?: 'scrollx' | 'fade';
    afterChange?: (current: number) => void;
    beforeChange?: (current: number, next: number) => void;
    onClickSlide?: (index: number) => void;
    setCarouselFunction?: Setter<CarouselFunction | undefined>;
};
type HorizontalCarouselProps = CarouselBaseProps & {
    direction?: 'horizontal';
    dotPlacement?: 'top' | 'bottom';
};
type VerticalCarouselProps = CarouselBaseProps & {
    direction: 'vertical';
    dotPlacement?: 'start' | 'end';
};
export type CarouselProps = HorizontalCarouselProps | VerticalCarouselProps;
export type CarouselFunction = {
    next: () => void;
    prev: () => void;
    moveTo: (index: number) => void;
    pause: () => {};
    play: () => {};
};
export {};
//# sourceMappingURL=carousel.types.d.ts.map