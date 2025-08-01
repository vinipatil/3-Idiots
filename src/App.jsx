import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Quotes from './pages/Diary';
import VideoGallery from "./pages/VideoGallery";
import BirthdayPage from './pages/BirthdayPage';

export default function App() {
  const [showFriendshipPopup, setShowFriendshipPopup] = useState(true);
  const { width, height } = useWindowSize();

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        {showFriendshipPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-hidden">
            {/* 🎊 Flowing Confetti */}
            <Confetti width={width} height={height} numberOfPieces={250} recycle={true} />

            {/* 💖 Modal */}
            <div className="relative w-[90%] max-w-md p-5 rounded-3xl bg-gradient-to-br from-[#1c1b33]/90 to-[#3a2c5e]/90 border border-pink-300 shadow-[0_0_40px_#ff9ce6] text-white animate-fade-in-up mt-20 sm:mt-24">

              {/* 💠 Diamond Emojis */}
              {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl animate-float-slow">💖</div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl animate-float-slow">🎉</div>
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-3xl sm:text-4xl animate-float-slow">✨</div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-3xl sm:text-4xl animate-float-slow">🎈</div> */}

              {/* Close Button */}
              <button
                onClick={() => setShowFriendshipPopup(false)}
                className="absolute top-2 right-3 text-white hover:text-pink-300 text-xl font-bold transition-transform hover:scale-125"
              >
                ❌
              </button>

              {/* Heading */}
              <h2 className="text-3xl sm:text-3xl font-extrabold text-yellow-400 mb-4 mt-3 text-center">
                🌸Happy Friendship Day Porino💙❤️💚🌸
              </h2>

              {/* Message */}
              <p className="text-base sm:text-lg font-medium text-white text-center leading-relaxed mb-4">
                ✨ You 2 are the home I never knew I needed 🥰
                ❣️Happy Friendship Day to my forever Trio. ❣️ <br />
                🥰 May our memories keep sparkling forever ✨
              </p>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mt-4 shadow-lg">
                <img
                  src="https://media.tenor.com/0aNYVMzw1N0AAAAi/craftykaname-annika-kaname.gif"
                  alt="Friendship Day"
                  className="w-full h-48 object-contain max-h-80 mx-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Main App */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/birthday" element={<BirthdayPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
