import * as react_jsx_runtime from 'react/jsx-runtime';

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

export { CalendarView, DragToReOrder };
