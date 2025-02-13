import { useState } from "react";
import bgVideo from "./assets/bg.mp4";
import loveGif from "./assets/1.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Are you sureee? 🥺",
      "Think again, cutie! 😚",
      "Last chance, sunshine! ☀️",
      "But... but... I had hopes! 😧",
      "Pookie, reconsider? 😘",
      "You're too adorable for this decision! 🥰",
      "Are you 100% sureee? 🧐",
      "Awww, have a heart! 💖",
      "You're my favorite, don't break my heart! 💔",
      "Wouldn’t a little rethink be nice? 🧠💕",
      "Final answer, smarty? 🏆",
      "Pwease? 🥹 Just one more thought?",
      "I believe in you! 🥰",
      "Wouldn't you reconsider, cutie pie? 🥺",
      "Big brain time! Give it another thought! 🧠✨",
      "You're way too cool for this! 😎❄️",
      "One more chance for me? 🥰",
      "If you change your mind, I’ll be sooo happy! 😄💕",
      "Trust your heart! ❤️",
      "Wait, wait! Just one more little rethink? 😖",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center h-screen text-zinc-900">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover brightness-75 blur-md"
        ></video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-4 -mt-16 selection:bg-rose-600 selection:text-white">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-4xl md:text-6xl font-bold my-4" style={{color:"white"}}>Ok Yayyyyy!!!</div>
            <a
              href="https://wa.me/9315748690?text=Hi%20Aditya!%20I%20said%20Yes!%20💕"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send me a message on WhatsApp
            </a>
          </>
        ) : (
          <>
            <img
              src={loveGif}
              className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
            />
            <img
              className="h-[230px] rounded-lg shadow-lg"
              src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-4xl md:text-6xl my-4 text-center" style={{color:"white"}}>
              Will you be my Valentine?
            </h1>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => {};
