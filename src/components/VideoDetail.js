import React from "react";

class VideoDetail extends React.Component {
  render() {
    if(!this.props.video) {
      return <div>{this.props.defaultTermMessage}</div>
    }

    const { title, publishTime } = this.props.video.snippet;
    const url = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div >
        <div className="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="515" src={url} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{publishTime}</p>
        </div>
      </div>
    )
  }
}

export default VideoDetail;