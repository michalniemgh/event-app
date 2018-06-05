import React from 'react';
import styled from 'styled-components';

import video from '../assets/video/video_panel.mp4'

const VideoPanel = styled.div`
  width: 100%
  height: 500px
  overflow: hidden
`;

const Video = styled.video`
  width: 100%
  transform: translateY(-200px)
`;

export default () => (
  <VideoPanel>
    <Video src={video} autoPlay loop />
  </VideoPanel>
);
