interface ResponseSizeValue {
    min?: Number;
    max?: Number;
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
    changeSize: (option?: {
        size: ResponseSizeOption;
    }) => void;
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
    changeSize: (option?: {
        size: ResponseSizeOption;
    }) => void;
    destroy: () => void;
};

export { $vSize, ResponseSize, ResponseSizeOption, ResponseSizeValue, $vSize as default };
