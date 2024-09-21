// src/components/calendar/index.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { useCallback, useEffect, useState } from "react";
// src/assets/icons/navigate-prev.jsx
import { jsx } from "react/jsx-runtime";
function NavigatePrevIcon(param) {
    var className = param.className;
    return /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className ? className : "w-6 h-6",
        children: /* @__PURE__ */ jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        })
    });
}
// src/assets/icons/navigate-next.jsx
import { jsx as jsx2 } from "react/jsx-runtime";
function NavigateNextIcon(param) {
    var className = param.className;
    return /* @__PURE__ */ jsx2("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className ? className : "w-6 h-6",
        children: /* @__PURE__ */ jsx2("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        })
    });
}
// src/components/calendar/index.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var sampleBookedDates = [
    new Date(2024, 8, 23),
    new Date(2024, 8, 22)
];
function CalendarView(param) {
    var date = param.date, _param_highlights = param.highlights, highlights = _param_highlights === void 0 ? sampleBookedDates : _param_highlights;
    var dateValue = /* @__PURE__ */ new Date();
    var _useState = _sliced_to_array(useState(date ? date : dateValue), 2), currentDay = _useState[0], setCurrentDay = _useState[1];
    var _useState1 = _sliced_to_array(useState([]), 2), currentDays = _useState1[0], setCurrentDays = _useState1[1];
    var changeHandler = useCallback(function(event) {
        var selectedDate = new Date(event.year, event.month, event.day);
        setCurrentDay(selectedDate);
    }, []);
    var generateDays = useCallback(function() {
        var daysArray = [];
        var firstDayOfMonth = new Date(currentDay === null || currentDay === void 0 ? void 0 : currentDay.getFullYear(), currentDay === null || currentDay === void 0 ? void 0 : currentDay.getMonth(), 1);
        var weekdayOfFirstDay = firstDayOfMonth.getDay();
        for(var day = 0; day < 42; day++){
            if (day === 0 && weekdayOfFirstDay === 0) {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
            } else if (day === 0) {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
            } else {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
            }
            var calendarDay = {
                currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
                date: new Date(firstDayOfMonth),
                month: firstDayOfMonth.getMonth(),
                day: firstDayOfMonth.getDate(),
                selected: firstDayOfMonth.toDateString() === currentDay.toDateString(),
                year: firstDayOfMonth.getFullYear(),
                highlight: highlights.find(function(item) {
                    return "".concat(item.getFullYear(), "-").concat(item === null || item === void 0 ? void 0 : item.getMonth(), "-").concat(item === null || item === void 0 ? void 0 : item.getDate()) === "".concat(firstDayOfMonth.getFullYear(), "-").concat(firstDayOfMonth === null || firstDayOfMonth === void 0 ? void 0 : firstDayOfMonth.getMonth(), "-").concat(firstDayOfMonth === null || firstDayOfMonth === void 0 ? void 0 : firstDayOfMonth.getDate());
                }) ? true : false
            };
            daysArray.push(calendarDay);
        }
        setCurrentDays(daysArray);
    }, [
        currentDay,
        highlights
    ]);
    useEffect(function() {
        generateDays();
    }, [
        currentDay
    ]);
    var prevMonthHandler = useCallback(function() {
        setCurrentDay(function(prev) {
            return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
        });
    }, []);
    var nextMonthHandler = useCallback(function() {
        setCurrentDay(function(prev) {
            return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
        });
    }, []);
    return /* @__PURE__ */ jsxs("div", {
        className: " w-full",
        children: [
            /* @__PURE__ */ jsxs("div", {
                className: " flex justify-between items-center gap-3",
                children: [
                    /* @__PURE__ */ jsx3("button", {
                        type: "button",
                        title: "prev",
                        onClick: function() {
                            return prevMonthHandler();
                        },
                        children: /* @__PURE__ */ jsx3(NavigatePrevIcon, {})
                    }),
                    /* @__PURE__ */ jsxs("h1", {
                        className: " font-bold",
                        children: [
                            months[currentDay.getMonth()],
                            " ",
                            currentDay.getFullYear()
                        ]
                    }),
                    /* @__PURE__ */ jsx3("button", {
                        type: "button",
                        title: "prev",
                        onClick: function() {
                            return nextMonthHandler();
                        },
                        children: /* @__PURE__ */ jsx3(NavigateNextIcon, {})
                    })
                ]
            }),
            /* @__PURE__ */ jsx3("div", {
                className: " grid grid-cols-7 gap-2  text-gray-500",
                children: weekdays.map(function(day) {
                    return /* @__PURE__ */ jsx3("div", {
                        className: " aspect-square p-1",
                        children: /* @__PURE__ */ jsx3("span", {
                            children: day
                        })
                    }, day);
                })
            }),
            /* @__PURE__ */ jsx3("div", {
                className: " grid grid-cols-7 gap-2",
                children: currentDays.map(function(item, index) {
                    return /* @__PURE__ */ jsxs("button", {
                        type: "button",
                        title: "days of calendar",
                        className: "".concat((item === null || item === void 0 ? void 0 : item.selected) ? " bg-primary text-white" : "", " ").concat((item === null || item === void 0 ? void 0 : item.currentMonth) ? "" : " text-gray-400", " aspect-square p-1 bg-gray-200 rounded-md relative overflow-hidden"),
                        onClick: function() {
                            return changeHandler(item);
                        },
                        children: [
                            /* @__PURE__ */ jsx3("span", {
                                children: item === null || item === void 0 ? void 0 : item.day
                            }),
                            (item === null || item === void 0 ? void 0 : item.highlight) && /* @__PURE__ */ jsx3("div", {
                                className: " absolute top-0 right-0 aspect-square border-l-8 border-l-transparent border-b-8 border-b-transparent border-8 border-green-500"
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
}
export { CalendarView };
