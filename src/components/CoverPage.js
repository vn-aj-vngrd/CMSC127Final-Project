import React from "react";
import VideoPlayer from "./VideoPlayer";

function CoverPage() {
  const videoSource = "/images/CoverPage.mp4";

  return (
    <div className="coverpage-container">
      <VideoPlayer videoSource={videoSource} />
    </div>
  );
}

export default CoverPage;
