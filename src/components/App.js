import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [defaultTermMessage, setDefaultTermMessage] = useState('...enter a search term');

  const [ videos, search ] = useVideos('張智霖');

  useEffect( () => {
    setDefaultTermMessage('...loading, please wait.');
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="container" style={{ marginTop: '10px' }}>
      <div className="row">
        <div className="col-12">
          <SearchBar onTermSubmit={ search } />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <VideoDetail defaultTermMessage={defaultTermMessage} video={selectedVideo} />
        </div>
        <div className="col-4">
          <VideoList defaultTermMessage={defaultTermMessage} onVideoSelect={setSelectedVideo} videos={ videos } />
        </div>
      </div>
    </div>
  );
};

export default App;