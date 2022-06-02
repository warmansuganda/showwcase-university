/* eslint-disable no-bitwise */
import moment from "moment";

export function generateYears(
  start: number,
  length: number,
  type: "increment" | "decrement"
) {
  return Array.from({ length }, (_, i) => {
    const year = type === "decrement" ? start - i : start + i;
    return {
      value: year,
      label: year,
    };
  });
}

export function generateMonths() {
  const months = moment.months();
  return months.map((label, index) => ({ value: index + 1, label }));
}

export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
