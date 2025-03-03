import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function CalendarView({ date, highlights, }: {
    date?: Date;
    highlights?: Date[];
}): react_jsx_runtime.JSX.Element;

declare function DragToReOrder({ data, setData, classnames, allowDelete, inputConfigration, }: {
    data: {
        id: string;
        image?: string;
        text?: string;
        inputFieldText?: string;
        showInputField?: boolean;
    }[];
    setData: Function;
    classnames?: {
        parentContainer?: string;
        childContainer?: string;
        image?: string;
        text?: string;
        binButton?: string;
        binIcon?: string;
        input?: string;
        inputIcon?: string;
        enableInputIcon?: string;
    };
    allowDelete?: boolean;
    inputConfigration?: {
        allowField?: boolean;
        rows?: number;
    };
}): react_jsx_runtime.JSX.Element;

declare function ImageCarousel({ images, classnames, autoTransitionOptions, }: {
    images: {
        url: string;
        child?: ReactNode;
    }[];
    classnames?: {
        parentContainer?: string;
        image?: string;
        counterContainer?: string;
        counterButton?: string;
        counterButtonActive?: string;
        counterButtonInactive?: string;
        navigationButtonContainer?: string;
        navigationButton?: string;
        childContainer?: string;
    };
    autoTransitionOptions?: {
        allow: boolean;
        seconds: number;
    };
}): react_jsx_runtime.JSX.Element;

declare function TriggerDownload({ uri, filename, label, className, startIcon, endIcon, }: {
    uri: string;
    filename: string;
    label?: string;
    className?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { CalendarView, DragToReOrder, ImageCarousel, TriggerDownload };
