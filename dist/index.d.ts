import * as vue from 'vue';

interface ResponseSizeValue {
    min?: number;
    max?: number;
}
interface ResponseSizeOption {
    xl?: ResponseSizeValue;
    lg?: ResponseSizeValue;
    md?: ResponseSizeValue;
    sm?: ResponseSizeValue;
    xs?: ResponseSizeValue;
}
interface ResponseSize {
    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
    width: number;
    height: number;
    changeSize: (option?: ResponseSizeOption) => void;
    destroy: () => void;
}
declare const $vSize: {
    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
    width: number;
    height: number;
    changeSize: (option?: ResponseSizeOption) => void;
    destroy: () => void;
};
declare function destroy(): void;
declare function changeSize(option?: ResponseSizeOption): void;
declare const isXs: vue.Ref<boolean>;
declare const isSm: vue.Ref<boolean>;
declare const isMd: vue.Ref<boolean>;
declare const isLg: vue.Ref<boolean>;
declare const isXl: vue.Ref<boolean>;
declare const width: vue.Ref<number>;
declare const height: vue.Ref<number>;

export { $vSize, ResponseSize, ResponseSizeOption, ResponseSizeValue, changeSize, $vSize as default, destroy, height, isLg, isMd, isSm, isXl, isXs, width };
