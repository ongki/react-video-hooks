import React from "react";

class VideoItem extends React.Component {

  render() {
    const { title, thumbnails, publishTime } = this.props.video.snippet;
    const onVideoSelect = this.props.onVideoSelect;

    return (
      <div className="card" style={{ width: `100%`, cursor: `pointer` }} onClick={() => onVideoSelect(this.props.video)} >
        <img src={thumbnails.high.url} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{publishTime}</p>
          </div>
      </div>
    )
  }
}
export default VideoItem;