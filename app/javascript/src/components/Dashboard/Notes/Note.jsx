import React from "react";

import dayjs from "dayjs";
import { Clock, MenuVertical } from "neetoicons";
import { Avatar, Dropdown, Tag, Tooltip, Typography } from "neetoui";

const Note = ({ note }) => (
  <div className="mb-3 w-full  border border-gray-300 bg-white p-4 shadow-md  dark:border-gray-700 dark:bg-gray-800 ">
    <div className="flex justify-between">
      <Typography style="h4" weight="bold">
        {note.title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li> Edit </li>
        <li> Delete </li>
      </Dropdown>
    </div>
    <div className="mb-2">
      <Typography className="--neeto-ui-gray-600">
        {note.description}
      </Typography>
    </div>
    <hr />
    <div className="flex justify-between">
      <div className="mt-3">
        <Tag
          className="neeto-ui-bg-gray-200"
          label="Getting Started"
          size="small"
        />
      </div>
      <div className="mt-3 flex items-center space-x-1">
        <Clock size={15} />
        <Tooltip
          content={dayjs(note.createdAt).format("dddd, hh:mmA")}
          position="bottom"
        >
          <Typography style="body3">
            Created {dayjs(note.createdAt).fromNow()}{" "}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
