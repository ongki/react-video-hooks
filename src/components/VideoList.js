import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedVideo = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} />
  });

  return (
    <div>
      <div>result: {props.videos.length}</div>
      {renderedVideo}
    </div>
  )
}

export default VideoList;