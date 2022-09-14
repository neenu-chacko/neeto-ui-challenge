import dayjs from "dayjs";

export const createdAt = dateTime => dayjs(dateTime).fromNow();

export const formatTime = dateTime => dayjs(dateTime).format("dddd, hh:mmA");
