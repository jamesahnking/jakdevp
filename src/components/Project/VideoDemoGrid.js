import React from 'react'
import { VideoContainer, PlayerWrapper, VideoPlayer } from "./ProjectElements";

const VideoDemoGrid = ({
  id,
  lightBg,
  lightText,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  darkText,
  towhere,
  dark,
  dark2,
  videoUrl
}) => {
  
  console.log(headline);
  
  return (
    <>
     <VideoContainer>
        <PlayerWrapper>
          <VideoPlayer
            url={videoUrl}
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