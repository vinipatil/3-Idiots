import React, { useState, useEffect } from 'react';
import videoMemories from '../data/videos.json';
import bgVideo from '../data/gr.mp4'; 

const rawVideos = Object.entries(
  import.meta.glob('../videos/*.mp4', { eager: true })
).map(([path, mod]) => {
  const fileName = path.split('/').pop(); // e.g., "1.mp4"
  const memory = videoMemories.find(v => v.filename === fileName);

  return {
    file: mod.default,
    title: memory?.title || fileName,
    filename: fileName,
  };
});

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const checkRatios = async () => {
      const checked = await Promise.all(
        rawVideos.map((vid) => {
          return new Promise((resolve) => {
            const video = document.createElement('video');
            video.src = vid.file;
            video.onloadedmetadata = () => {
              const isPortrait = video.videoHeight > video.videoWidth;
              resolve({ ...vid, isPortrait });
            };
          });
        })
      );
      setVideos(checked);
    };

    checkRatios();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔹 Fullscreen Background Video */}
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 px-6 py-12 bg-black/40 min-h-screen flex flex-col justify-start">
        <h2 className="text-5xl font-bold text-center mb-12 text-purple-100 drop-shadow-md">
          🎥 Memories in Motion 🎥
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-xl shadow-xl border-4 border-pink-200 p-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-xl overflow-hidden h-[280px] w-full flex items-center justify-center bg-black">
                <video
                  controls
                  preload="auto"
                  className="w-full h-full object-contain"
                >
                  <source src={video.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold text-pink-800 mt-3 text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
