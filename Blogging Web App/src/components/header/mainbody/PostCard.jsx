import React from "react";
import Button from "./Button";

const PostCard = ({
  isrc,
  ialt,
  para,
  authorimg,
  auialt,
  authorName,
  date,
}) => {
  return (
    <div className="p-5 flex flex-col rounded-sm h-[488px] w-[392px] gap-2 shadow-md  m-1 ">
      <img src={isrc} alt="ialt" />
      <div>
        <Button btntext="Technology " className="text-[#4b6bfb] bg-[#f6f8ff]" />
      </div>
      <p className="text-2xl font-semibold">{para}</p>
      <div className="authorCon flex w-[100%] gap-3 items-center">
        <img
          src={authorimg}
          alt="auialt"
          height={36}
          width={36}
          className="rounded-full"
        />
        <p>{authorName}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default PostCard;
