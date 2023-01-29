import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./Context/ThemeContext";

const VideoCard = ({ videoData }) => {
  const { id } = videoData;
  const { themeCon } = useContext(ThemeContext);
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 p-3`}>
      <Link to={"/watch?v=" + id}>
        <div className={`card border-0 rounded-2xl mt-4  ${themeCon === "dark" ? "darkClass" : "lightClass"}`}>
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
