import RandomQuote from '../components/RandomQuote';
import bgVideo from '../data/bg2.mp4'; 


export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-6 pt-12 text-center overflow-hidden"
    >
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
      <div className="relative z-10 w-full max-w-6xl mx-auto p-8 rounded-[40px] border-[3px] border-pink-300 shadow-[0_0_30px_5px_rgba(255,192,203,0.4)] bg-gradient-to-br from-white/60 via-pink-100/60 to-white/60 backdrop-blur-[2px]">

        <h2 className="text-5xl font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)] animate-bounce mb-9 mt-7">
          💖 Welcome to Our Memory Garden 💖
        </h2>

        <p className="text-2xl font-bold italic mb-4">
          A place where our hearts live forever in every memory.
        </p>

        <RandomQuote />


        <div className="relative mt-14 z-10">
          <div className="absolute w-64 h-64 bg-pink-200 rounded-full opacity-30 blur-2xl top-[-50px] left-[-50px] animate-spin-slow"></div>
          <div className="absolute w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-2xl bottom-[-50px] right-[-40px] animate-pulse-slow"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-red-800">
            <div className="p-5 bg-white/70 rounded-[40px] shadow-xl hover:shadow-yellow-300 transition hover:rotate-[-2deg]">
              <div className="text-4xl mb-2">😆</div>
              <h4 className="text-lg font-bold mb-3">तीन जणी आणि एकच मेंदू</h4>
              <p className="text-sm font-bold text-black">"जेव्हा आपण तिघी मिळून निर्णय घेतो, तेव्हाच सगळं विस्कळीत होतं!"</p>
            </div>

            <div className="p-5 bg-white/70 rounded-[40px] shadow-xl hover:shadow-yellow-300 transition hover:rotate-[2deg]">
              <div className="text-4xl mb-2">🍟</div>
              <h4 className="text-lg font-bold mb-3">चटरपटर, गॉसिप आणि सेल्फी</h4>
              <p className="text-sm font-bold text-black">
                "फेव्हरिट खाणं, भन्नाट गप्पा आणि १०० सेल्फीज – आपली भेट म्हणजे छोटंसं फेस्टिव्हलच!"
              </p>
            </div>


            <div className="p-5 bg-white/70 rounded-[40px] shadow-xl hover:shadow-yellow-300 transition hover:rotate-[-1deg]">
              <div className="text-4xl mb-2">🤳</div>
              <h4 className="text-lg font-bold mb-3">फोटोशूट मोमेंट्स</h4>
              <p className="text-sm font-bold text-black">
                "कॅमेरा ऑन झाला की आपण चेहऱ्यावर वेगवेगळ्या expressions लावायला सुरुवात करतो!"
              </p>
            </div>

          </div>
        </div>


        <p className="text-3xl text-black-500 font-bold mt-10 italic">
          🌈 Let’s make more beautiful memories together...
        </p>


      </div>
    </div>
  );
}

