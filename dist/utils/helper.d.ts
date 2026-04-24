import { BaseColorProps } from '../type';
import { JSX } from 'solid-js';
type TimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end' | `steps(${number}, ${'start' | 'end'})` | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
type FillMode = 'none' | 'forwards' | 'backwards' | 'both';
type PlayState = 'running' | 'paused';
type TimeUnit = `${number}s` | `${number}ms`;
type IterationCount = number | 'infinite';
export interface AnimationConfig {
    name: string;
    duration?: TimeUnit;
    timingFunction?: TimingFunction;
    delay?: TimeUnit;
    iterationCount?: IterationCount;
    direction?: AnimationDirection;
    fillMode?: FillMode;
    playState?: PlayState;
}
export declare function renderCSSAnimation(config: AnimationConfig): string;
export declare function createThrottle<T extends (...args: any[]) => void>(fn: T, delay: number): T & {
    cancel: () => void;
};
export declare function normalizeHexColor(value: string | undefined): string;
export declare function getColor(color?: BaseColorProps | string, defaultColor?: string): string;
export declare function getRandomElement<T>(arr: T[], uniqueId: string): T;
export declare const genSVGCubicBezier: (keySplines: string) => Pick<JSX.AnimateSVGAttributes<SVGAnimateElement>, 'calcMode' | 'keyTimes' | 'keySplines'>;
export type Image = Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    src: string;
};
export declare function toMarkdownCode(code: string, lang?: string): string;
export {};
//# sourceMappingURL=helper.d.ts.map