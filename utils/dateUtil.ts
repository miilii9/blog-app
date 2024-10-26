import moment from "moment-jalaali";

export const gregorianToJalaliWithTime = (
  gregorian: Date | string,
  hasTime: boolean = false
): string => {
  gregorian = new Date(gregorian);
  gregorian = `${gregorian.getFullYear()}-${
    gregorian.getMonth() + 1
  }-${gregorian.getDate()} ${gregorian.getHours()}:${gregorian.getMinutes()}:${gregorian.getSeconds()}`;
  return moment(`${gregorian}`, "YYYY-MM-DD HH:mm:ss").format(
    hasTime ? "jYYYY/jMM/jDD HH:mm:ss" : "jYYYY/jMM/jDD HH:mm:ss"
  );
};
