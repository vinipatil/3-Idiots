import React, { useState, useEffect } from 'react';
import videoBg from '../data/bg3.mp4';
import memories from '../data/memories.json';

const importedImages = Object.entries(
  import.meta.glob('../photos/*.jpg', { eager: true })
).map(([path, mod]) => mod.default);

const rawImages = importedImages.map((url, i) => ({
  url,
  caption: memories[i]?.caption || `Memory #${i + 1}`,
  year: memories[i]?.year || 'Unknown',
  rotate: (i % 2 === 0 ? 1 : -1) * (Math.random() * 5 + 3) // Store rotate once
}));

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      const checked = await Promise.all(
        rawImages.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = img.url;
            image.onload = () => {
              const isWide = image.naturalWidth / image.naturalHeight > 1.2;
              resolve({ ...img, isWide });
            };
          });
        })
      );
      setImages(checked);
    };

    checkImages();
  }, []);

  return (
    <div className="relative min-h-screen px-4 sm:px-6 py-12 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-bold text-center text-white drop-shadow-lg mb-12 sm:mb-20">
        📸 Our Beautiful Memories 📸
      </h2>

      {/* Image Cards */}
      <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-white shadow-2xl rounded-md w-full max-w-[240px] p-2 pb-6 transform transition-transform duration-300 hover:scale-105"
            style={{
              rotate: `${img.rotate}deg`,
            }}
          >
            <div className="relative group flex justify-center items-center h-[280px]">
              <img
                src={img.url}
                alt={`Memory ${i + 1}`}
                className={`rounded-md transition-opacity duration-700 opacity-0 group-hover:opacity-100 ${
                  img.isWide
                    ? 'object-contain h-full w-auto'
                    : 'object-cover w-full h-full'
                }`}
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                loading={i < 6 ? 'eager' : 'lazy'} // First few images load eagerly
              />
              <div className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                <p className="text-sm italic">{img.caption}</p>
                <p className="text-xs mt-1">{img.year}</p>
              </div>
            </div>
            <p className="text-center text-black font-handwriting mt-3 text-lg sm:text-xl">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
