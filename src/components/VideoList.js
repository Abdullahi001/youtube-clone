import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedlList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div>{renderedlList}</div>;
};

export default VideoList;
