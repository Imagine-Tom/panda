import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mov'


const VideoContainer = styled.div`
width: 100%;
border-radius: 20%;
video{
    width: 100%;
    border-radius: 30%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop  />
    </VideoContainer>
  )
}

export default CoverVideo