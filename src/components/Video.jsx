import React from 'react';
import './css/video.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const Video = (props) => (
    <ParallaxProvider>
        <ParallaxBanner
            className="videocontainer"
            style={{ aspectRatio: '2 / 1' }}
            layers={[
                {
                    speed: -30,
                    children: (
                        <video
                            className="video"
                            autoPlay
                            loop
                            playsInline
                            preload="auto"
                            muted
                            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea.jpg"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea-720.mp4"
                        />
                    ),
                },
            ]}
        >
            <div className="text2">
                <span className="bye">Thank you!</span>
            </div>
        </ParallaxBanner>
        </ParallaxProvider>
);

export default Video;
