import dayjs from "dayjs";

export const createdAgo = dateTime => dayjs(dateTime).fromNow();

export const formatTime = dateTime => dayjs(dateTime).format("dddd, hh:mmA");
