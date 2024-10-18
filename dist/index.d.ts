import * as react_jsx_runtime from 'react/jsx-runtime';

declare function CalendarView({ date, highlights, }: {
    date?: Date;
    highlights?: Date[];
}): react_jsx_runtime.JSX.Element;

declare function DragToReOrder({ data, setData, classnames, allowDelete, }: {
    data: {
        id: string;
        image?: string;
        text?: string;
    }[];
    setData: Function;
    classnames?: {
        parentContainer?: string;
        childContainer?: string;
        image?: string;
        text?: string;
        binButton?: string;
        binIcon?: string;
    };
    allowDelete?: boolean;
}): react_jsx_runtime.JSX.Element;

export { CalendarView, DragToReOrder };
