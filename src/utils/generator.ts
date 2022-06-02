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
