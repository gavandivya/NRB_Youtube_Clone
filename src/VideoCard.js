import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { id } = videoData;
  return (
    <div className="col-3 p-1">
      <Link to={"/watch?v=" + id}>
        <div className="card border-0 rounded-2xl mt-4">
          <img
            alt="thumbnail"
            className="img-fluid rounded-2xl"
            src={videoData?.snippet?.thumbnails?.medium.url}
          />
          <p style={{ fontSize: "13px" }} className="font-semibold">
            {videoData?.snippet?.title.slice(0, 70)}
          </p>
          <p className="text-gray-400 text-xs">
            {videoData?.snippet?.channelTitle} | Views -
            {videoData?.statistics?.viewCount}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
