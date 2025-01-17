import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { toast } from "react-toastify"; // Import toast từ react-toastify
import { useTranslation } from "react-i18next";
import { useEpisode } from "../../../hooks/useEpisode";

interface VideoPlayerProps {
  src: string; // URL HLS (.m3u8)
  autoNext: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, autoNext }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  const { handleNextEpisode } = useEpisode();

  useEffect(() => {
    if (!src || typeof src !== "string") {
      console.error("Invalid source URL provided to VideoPlayer:", src);
      return;
    }

    const video = videoRef.current;

    if (video) {
      let hls: Hls | null = null;

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src); // Load URL
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS manifest loaded successfully!");
          video.play();
        });

        // Lắng nghe sự kiện 'ended' của video (nếu video kết thúc)
        if (autoNext) {
          video.onended = () => {
            handleNextEpisode();
            toast.success(t("common.eventvideo.success"));
          };
        }

        // Lắng nghe lỗi của HLS.js
        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS.js Error:", data);
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src; // Xử lý trường hợp không có HLS.js
      } else {
        console.error("Browser does not support HLS.");
      }

      // Cleanup: Hủy đối tượng HLS.js khi component bị unmount
      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }
  }, [src]);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", height: "auto" }}
      ></video>
    </div>
  );
};

export default VideoPlayer;
