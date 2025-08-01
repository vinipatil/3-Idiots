import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

// 🎂 Friend list
const friends = [
  { name: 'Aishu 🎀', birthday: '02-24', emoji: '🎀' },
  { name: 'Vinu 💫', birthday: '06-16', emoji: '💫' },
  { name: 'Dhanu 🌸', birthday: '03-08', emoji: '🌸' },
];

// 🎉 Dynamically import local birthday photos
const birthdayImages = Object.values(
  import.meta.glob('../birthdayPhotos/*.jpg', { eager: true })
).map(mod => mod.default);

// 🎯 Countdown calculator
const calculateCountdown = (birthdayMMDD) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const [month, day] = birthdayMMDD.split('-').map(Number);
  let birthday = new Date(currentYear, month - 1, day);
  if (birthday < now) {
    birthday = new Date(currentYear + 1, month - 1, day);
  }
  const diff = birthday - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export default function BirthdayPage() {
  const { width = 360, height = 640 } = useWindowSize();
  const [countdowns, setCountdowns] = useState({});
  const [birthdayFriend, setBirthdayFriend] = useState(null);

  useEffect(() => {
    const today = new Date();
    const todayStr = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const birthdayToday = friends.find(friend => friend.birthday === todayStr);
    setBirthdayFriend(birthdayToday || null);
  }, []);

  useEffect(() => {
    const updateCountdowns = () => {
      const updated = {};
      friends.forEach(friend => {
        updated[friend.name] = calculateCountdown(friend.birthday);
      });
      setCountdowns(updated);
    };
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center p-4 sm:p-6 overflow-hidden">

      <div
        className="fixed inset-0 -z-10 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp2504240.jpg')",
          backgroundSize: 'cover',
        }}
      />



      {/* 🎊 Flowing Confetti */}
      <Confetti width={width} height={height} recycle={true} numberOfPieces={250} />

      {/* 🎁 Modal on Birthday */}
      {birthdayFriend && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative bg-white/20 border border-pink-300 shadow-2xl backdrop-blur-2xl rounded-3xl p-6 sm:p-10 max-w-md w-[90%] overflow-hidden text-center text-white animate-fadeInUp">

            {/* 🌟 Diamond Emoji Glow */}
            <div style={{ position: 'absolute', top: '215px', left: '45%', transform: 'translateX(-50%)' }} className="text-3xl animate-bounce-slow">✨</div>
            <div style={{ position: 'absolute', bottom: '9px', left: '45%', transform: 'translateX(-50%)' }} className="text-3xl animate-bounce-slow">✨</div>
            <div style={{ position: 'absolute', top: '65%', left: '5px', transform: 'translateY(-50%)' }} className="text-3xl animate-bounce-slow">✨</div>
            <div style={{ position: 'absolute', top: '65%', right: '3px', transform: 'translateY(-50%)' }} className="text-3xl animate-bounce-slow">✨</div>

            {/* 💝 Modal Content */}
            <h2 className="text-3xl font-bold text-yellow-200 mb-4 drop-shadow-lg glow-text">
              🎂 Happy Birthday {birthdayFriend.name.split(' ')[0]}! 🎊
            </h2>
            <p className="text-base sm:text-lg text-white font-semibold mb-4">
              You light up our lives just like this day. Here’s to more laughs, memories, and magic! 💫
            </p>
            <img
              src={"https://static.vecteezy.com/system/resources/previews/027/110/675/non_2x/vivid-birthday-cake-background-free-photo.jpg"}
              alt="Birthday"
              className="w-full h-52 sm:h-60 object-cover rounded-2xl mt-10 shadow-lg border border-pink-200"
            />
            <button
              className="absolute top-3 right-5 text-white text-2xl hover:text-red-300 font-bold"
              onClick={() => setBirthdayFriend(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 🎈 Header */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
        🎂 Birthday Zone 🎂
      </h1>
      <p className="text-base sm:text-xl text-pink-700 font-bold mb-8">
        🥳💖 Let’s countdown to our special days 💖🥳
      </p>

      {/* ⏳ Countdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-5">
        {friends.map(friend => (
          <div
            key={friend.name}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-5 mx-auto w-full max-w-xs border border-pink-100 hover:scale-105 transition duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-bold text-pink-700 mb-2">
              {friend.emoji} {friend.name}
            </h3>
            <p className="text-sm sm:text-lg text-purple-800">Birthday in</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-black mt-3 italic">
              {countdowns[friend.name] ?? '--'} days
            </p>
          </div>
        ))}
      </div>

      {/* 📸 Birthday Memory Photos */}
      <div className="w-full max-w-6xl px-2 sm:px-4 mt-8">
        <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-pink-700 mb-10">
          🎞️ Past Birthday Moments
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
          {birthdayImages.map((src, index) => (
            <div
              key={index}
              className="w-24 h-32 sm:w-36 sm:h-44 md:w-44 md:h-52 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                rotate: `${(index % 2 === 0 ? 1 : -1) * (Math.random() * 8 + 3)}deg`,
              }}
            >
              <img
                src={src}
                alt={`Birthday Memory ${index + 1}`}
                className="w-full h-full object-cover rounded-xl border border-black"
              />
            </div>
          ))}
        </div>
      </div>



      {/* ✨ Footer Message */}
      <p className="italic text-base sm:text-3xl md:text-4xl font-bold text-black mt-14 mb-8">
        More memories coming soon... 💫
      </p>

      {/* 🔮 Animations */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 10px #ff8bd4, 0 0 20px #e963ff, 0 0 30px #ff6bd3;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-bounce-slow {
            animation: bounceSlow 3s infinite ease-in-out;
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
}
