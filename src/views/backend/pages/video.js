
// import React from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-contrib-quality-levels';


// export const VideoJS = (props) => {
//   const videoRef = React.useRef(null);
//   const playerRef = React.useRef(null);
//   const {options, onReady} = props;

//   React.useEffect(() => {

//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
//       const videoElement = document.createElement("video-js");  

//       videoElement.classList.add('vjs-big-play-centered');
//       videoRef.current.appendChild(videoElement);

//       const player = playerRef.current = videojs(videoElement, options, () => {
//         videojs.log('player is ready');
//         onReady && onReady(player);
//       });

//     // You could update an existing player in the `else` block here
//     // on prop change, for example:
//   } else {
//     const player = playerRef.current;
//     player.autoplay(options.autoplay);
//     player.src(options.sources);
//   }
// }, [options, videoRef]);


//   // Dispose the Video.js player when the functional component unmounts
//   React.useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div data-vjs-player>
   
//     <div ref={videoRef} />
    
//   </div>
//   );
// }

// export default VideoJS;




import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'video.js/dist/video-js.css'; 


export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video');
      videoElement.classList.add('video-js', 'vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);

        // Initialize quality levels plugin
        const qualityLevels = player.qualityLevels();

       
        qualityLevels.on('addqualitylevel', (event) => {
          const qualityLevel = event.qualityLevel;
          if (qualityLevel.height < 720) {
            qualityLevel.enabled = false;
          }
        });

    
        player.toggleQuality = () => {
          for (const qualityLevel of qualityLevels.levels_) {
            if (qualityLevel.height >= 720) {
              qualityLevel.enabled = !qualityLevel.enabled;
            }
          }
        };

      
        player.addRemoteTextTrack({
          kind: 'subtitles',
          srclang: 'en',
          label: 'English',
          src: 'path/to/english.vtt',
          default: true,
        });

        player.addRemoteTextTrack({
          kind: 'subtitles',
          srclang: 'es',
          label: 'Spanish',
          src: 'path/to/spanish.vtt',
        });

        player.textTracks()[0].mode = 'showing';
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
      if (options.qualityLevels) {
        player.qualityLevels(options.qualityLevels);
      }
    }

    
    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef]);

  return <div data-vjs-player><div ref={videoRef} /></div>;
};

export default VideoJS;
