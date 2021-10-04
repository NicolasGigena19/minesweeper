import Moment from "moment";

export const dateDMY = date => {
  return Moment(date).format("DD-MM-YYYY");
};
