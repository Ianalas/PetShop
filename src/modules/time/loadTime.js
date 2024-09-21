import { fetchByDay } from "../../services/fetch-by-day";
import { createTime } from "./showTime";

export const loadTime = async () => {
  const resp = await fetchByDay();
  createTime({ dailyTimes: resp });
};
