import FlvJs from 'flv.js'
import DPlayer from 'dplayer';
import { useEffect } from 'react';

interface IProps {
  liveUrl: string
}

export default function livePlayer(props: IProps) {
  useEffect(() => {
    const options = {
      container: document.getElementById('dplayer'),
      live: true,
      autoplay: true,
      video: {
        url: props.liveUrl,
        type: 'customFlv',
        customType: {
          customFlv: function (video: any) {
            const flvPlayer = FlvJs.createPlayer({
              type: 'flv',
              url: video.src,
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
          },
        },
      },
    };
    const dp = new DPlayer(options);
    dp.play();
  })
  return (
    <div id="dplayer"></div>
  )
}
