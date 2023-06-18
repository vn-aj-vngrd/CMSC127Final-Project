import React, { Component } from "react";

class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <video controls>
          <source src={this.props.videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
