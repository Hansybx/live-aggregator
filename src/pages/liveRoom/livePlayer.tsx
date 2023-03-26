import FlvJs from 'flv.js'
import DPlayer from 'dplayer';
import { useEffect } from 'react';

export default function livePlayer() {
    useEffect(() => {
        const options = {
          container: document.getElementById('dplayer'),
          live: true,
          autoplay: true,
          video: {
            url: 'http://hw-tct.douyucdn.cn/live/288016rlols5.flv?uuid=',
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
        console.log('test', options, dp)
        dp.play();
      })
  return (
    <div id="dplayer"></div>
  )
}
