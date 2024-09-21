import dayjs from "dayjs";

export const verifcedDate = (dateTime, dateSelected) => {
  let itemData = dayjs(dateTime);
  let selectedData = dayjs(dateSelected);

  return dayjs(itemData).isSame(selectedData) ? true : false;

};
