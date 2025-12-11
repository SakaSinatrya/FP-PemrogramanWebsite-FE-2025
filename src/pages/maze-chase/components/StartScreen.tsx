import React from "react";
import backgroundHome from "@/assets/maze-chase/Home_Background_assets.png";
import logoHome from "@/assets/maze-chase/Home_Logo_assets.png";
import characterHome from "@/assets/maze-chase/Home_Character_assets.png";
import buttonHome from "@/assets/maze-chase/Home_Button_assets.png";

interface StartScreenProps {
  onStart: () => void;
  hideButton?: boolean; // optional
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, hideButton }) => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundHome})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes buttonBounce {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }

        .float-animation {
          animation: floatUp 3s ease-in-out infinite;
        }

        .button-bounce {
          animation: buttonBounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Content Container - Vertical Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6 w-full h-full px-4">
        {/* MAZE CHASE Logo - Top */}
        <img
          src={logoHome}
          alt="MAZE CHASE"
          className="w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl float-animation mt-12 md:mt-16"
        />

        {/* PLAY Button - Middle */}
        {!hideButton && (
          <button
            onClick={onStart}
            className="relative z-10 bg-transparent border-none cursor-pointer my-2 md:my-4"
          >
            <img
              src={buttonHome}
              alt="PLAY"
              className="w-48 md:w-56 lg:w-64 h-auto drop-shadow-lg button-bounce hover:drop-shadow-xl transition-all"
            />
          </button>
        )}

        {/* Character - Bottom */}
        <img
          src={characterHome}
          alt="Character"
          className="w-40 md:w-48 lg:w-56 h-auto drop-shadow-lg float-animation mb-8 md:mb-12"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
};

export default StartScreen;
