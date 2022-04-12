import React from 'react'
import { VideoContainer, PlayerWrapper, VideoPlayer } from "./ProjectElements";
import getYouTubeID from 'get-youtube-id';
import ReactPlayer from 'react-player'

const VideoDemoGrid = () => {
  
  const youtubeId = getYouTubeID("https://www.youtube.com/watch?v=7sDY4m8KNLc");
  console.log(youtubeId);
  
  return (
    <>
     <VideoContainer>
        <PlayerWrapper>
          <VideoPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width="100%"
            player= 'yes'
            height= "500px"
            controls='true'
            />
        </PlayerWrapper>
      </VideoContainer>

    </>
  )
}

export default VideoDemoGrid;