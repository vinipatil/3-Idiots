import { useState } from 'react';

export default function Footer() {
  const [showName, setShowName] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-purple-100 to-pink-200 px-4 py-2 text-center shadow-md mt-auto">
      <div className="text-sm sm:text-base font-semibold cursor-pointer hover:text-pink-600 transition duration-300 ease-in-out max-w-4xl mx-auto">
        {!showName ? (
          <span onClick={() => setShowName(true)}>
            ❤️ Wondering who sent this?{' '}
            <span className="underline underline-offset-4">Click here</span> to find out... ❤️
          </span>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2  text-center">
            <span className="text-sm sm:text-base">
               <span className='font-bold text-xl'>❤️🎁Surpriseee !!!!!</span> This little world was crafted just for you by The one & Only{' '}
              <span className="underline underline-offset-4">Vini</span>
            </span>
            <img
              src="https://media.tenor.com/t70hfapVb_IAAAAi/samsung-one-ui.gif"
              alt="cool"
              className="w-8 h-8 sm:w-10 sm:h-10 inline-block mb-[3px]"
            />
            {/* <span>❤️🎁</span> */}
          </div>
        )}
      </div>
    </footer>
  );
}
