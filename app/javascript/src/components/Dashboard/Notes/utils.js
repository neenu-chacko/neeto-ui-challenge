import dayjs from "dayjs";

export const lastCreatedAt = dateTime => dayjs(dateTime).fromNow();

export const formatTime = dateTime => dayjs(dateTime).format("dddd, hh:mmA");
