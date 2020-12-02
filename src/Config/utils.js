import moment from "moment";

export const getFormatedDate = (date) =>
  date ? moment(date).format("D MMM YYYY, hh:M A") : null;
