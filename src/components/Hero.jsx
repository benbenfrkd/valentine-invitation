import { useState } from "react";
import confetti from "../img/confetti.gif";
import happyCat from "../img/happyCat.gif";
import joey1 from "../img/joey1.gif";
import woo from "../img/woo.gif";
import kidExcited from "../img/kidExcited.gif";
import happyDragon from "../img/happyDragon.gif";
import sheSaidYes from "../img/yes.gif";

export default function Hero({ yes, handleYes }) {
  const [position, setPosition] = useState({ top: "55%", left: "43%" });
  const [lock, setLock] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [size, setSize] = useState(16);

  const handleSize = () => {
    setSize((prevSize) => prevSize + 8);
    setClickCount(clickCount + 1);
  };

  const handleLock = () => {
    setLock(true);
  };

  const handleHover = () => {
    if (lock) {
      ("");
    } else {
      let randomTop = Math.floor(Math.random() * window.innerHeight);
      let randomLeft = Math.floor(Math.random() * window.innerWidth);
      setPosition({ top: randomTop, left: randomLeft });
      setHoverCount(hoverCount + 1);
    }
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center flex-col relative overflow-x-hidden text-center`}>
      <h1>
        Hey Girl 😉
        <br /> Will you be my valentine? 🌹
      </h1>
      <button
        className="w-20 h-8 border border-black bg-red-400 rounded-md absolute z-10 transition-all hover:scale-105 active:bg-red-600 active:scale-100"
        style={{ top: position.top, left: position.left }}
        onMouseEnter={handleHover}
        onClick={handleSize}>
        no{" "}
        <span
          className={`absolute transition-all delay-200 -translate-x-1/2 -translate-y-1/2  ${
            lock
              ? "block opacity-100 text-2xl"
              : "hidden text-[20rem] opacity-0"
          }`}>
          🔒
        </span>
      </button>
      <button
        onClick={handleYes}
        className="px-8 py-1 border border-black bg-green-400 rounded-md absolute top-[57%] left-[53%] z-20 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all active:bg-green-600">
        <p style={{ fontSize: `${size}px` }}>yes</p>
      </button>

      <img
        src={confetti}
        className={`absolute bottom-0 right-0 ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={happyCat}
        className={`absolute bottom-0 left-0 delay-700 ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={joey1}
        className={`absolute top-0 left-0 h-[30%] delay-[800ms] ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={kidExcited}
        className={`absolute top-0 right-0 delay-[900ms] h-[30%] ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={woo}
        className={`absolute bottom-[20%] delay-1000 left-1/2 -translate-x-1/2 ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={happyDragon}
        className={`absolute top-0 left-1/2 delay-[1100ms] -translate-x-1/2 h-[30%] ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />
      <img
        src={sheSaidYes}
        className={`absolute top-1/2 left-0 delay-[1200ms] -translate-y-1/2 h-[30%] ${
          yes ? "opacity-100 z-20" : "opacity-0"
        }`}
        alt=""
      />

      <div className="absolute bottom-4 right-4 text-xl border-4 p-1 border-black rounded-lg transition-all">
        {hoverCount >= 5 && hoverCount <= 9 ? (
          <p>You really wanna decline my invitation huh 🤨</p>
        ) : hoverCount >= 10 && hoverCount <= 14 ? (
          <p>Do you really not want to be my valentine? 😒</p>
        ) : hoverCount >= 15 && hoverCount <= 19 ? (
          <p>Wait.. you really not want to be my valentine..? 🙁</p>
        ) : hoverCount >= 20 && hoverCount <= 24 ? (
          <p>Do you even love me..? 😟</p>
        ) : hoverCount >= 25 && hoverCount <= 29 ? (
          <p>I&apos;m sad.. you don&apos;t love me anymore 😞</p>
        ) : hoverCount >= 25 ? (
          clickCount <= 5 ? (
            <p>
              Okay fine here&apos;s a hand for you!😡 click here 👉
              <span
                className="cursor-pointer hover:text-3xl transition-all"
                onClick={handleLock}>
                🔑
              </span>
            </p>
          ) : clickCount >= 6 && clickCount <= 10 ? (
            <p>it&apos;s not going to stop you know 😒</p>
          ) : clickCount >= 11 && clickCount <= 15 ? (
            <p>not until you say yes 🙄</p>
          ) : clickCount >= 16 ? (
            <p>if you say yes i will take you on a sweet dinner </p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
