import { ProgressBarOptions } from './progress-bar.types';
export interface ProgressBarAPI {
    start: (options?: ProgressBarOptions) => void;
    dismiss: () => void;
}
declare const progressBar: ProgressBarAPI;
export { progressBar };
//# sourceMappingURL=progress-bar.d.ts.map