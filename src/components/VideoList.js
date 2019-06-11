import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedlList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedlList}</div>;
};

export default VideoList;
