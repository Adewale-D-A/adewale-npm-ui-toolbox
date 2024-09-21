"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    CalendarView: function() {
        return CalendarView;
    }
});
module.exports = __toCommonJS(src_exports);
// src/components/calendar/index.tsx
var import_react = require("react");
// src/assets/icons/navigate-prev.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function NavigatePrevIcon(param) {
    var className = param.className;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className ? className : "w-6 h-6",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        })
    });
}
// src/assets/icons/navigate-next.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function NavigateNextIcon(param) {
    var className = param.className;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className ? className : "w-6 h-6",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        })
    });
}
// src/components/calendar/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
    var _ref = _sliced_to_array((0, import_react.useState)(date ? date : dateValue), 2), currentDay = _ref[0], setCurrentDay = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)([]), 2), currentDays = _ref1[0], setCurrentDays = _ref1[1];
    var changeHandler = (0, import_react.useCallback)(function(event) {
        var selectedDate = new Date(event.year, event.month, event.day);
        setCurrentDay(selectedDate);
    }, []);
    var generateDays = (0, import_react.useCallback)(function() {
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
    (0, import_react.useEffect)(function() {
        generateDays();
    }, [
        currentDay
    ]);
    var prevMonthHandler = (0, import_react.useCallback)(function() {
        setCurrentDay(function(prev) {
            return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
        });
    }, []);
    var nextMonthHandler = (0, import_react.useCallback)(function() {
        setCurrentDay(function(prev) {
            return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
        });
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        className: " w-full",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
                className: " flex justify-between items-center gap-3",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
                        type: "button",
                        title: "prev",
                        onClick: function() {
                            return prevMonthHandler();
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NavigatePrevIcon, {})
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", {
                        className: " font-bold",
                        children: [
                            months[currentDay.getMonth()],
                            " ",
                            currentDay.getFullYear()
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
                        type: "button",
                        title: "prev",
                        onClick: function() {
                            return nextMonthHandler();
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NavigateNextIcon, {})
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                className: " grid grid-cols-7 gap-2  text-gray-500",
                children: weekdays.map(function(day) {
                    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                        className: " aspect-square p-1",
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                            children: day
                        })
                    }, day);
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                className: " grid grid-cols-7 gap-2",
                children: currentDays.map(function(item, index) {
                    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", {
                        type: "button",
                        title: "days of calendar",
                        className: "".concat((item === null || item === void 0 ? void 0 : item.selected) ? " bg-primary text-white" : "", " ").concat((item === null || item === void 0 ? void 0 : item.currentMonth) ? "" : " text-gray-400", " aspect-square p-1 bg-gray-200 rounded-md relative overflow-hidden"),
                        onClick: function() {
                            return changeHandler(item);
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                                children: item === null || item === void 0 ? void 0 : item.day
                            }),
                            (item === null || item === void 0 ? void 0 : item.highlight) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                                className: " absolute top-0 right-0 aspect-square border-l-8 border-l-transparent border-b-8 border-b-transparent border-8 border-green-500"
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CalendarView: CalendarView
});
