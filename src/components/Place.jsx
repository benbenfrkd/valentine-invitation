import movieDate from "../img/movieDate.jpg";
import aquariumDate from "../img/aquariumDate.jpg";
import mallDate from "../img/mallDate.jpg";
import dinnerDate from "../img/dinnerDate.jpg";
import gameDate from "../img/gameDate.jpg";
import nsfwDate from "../img/nsfwDate.jpg";
import { useState } from "react";

const dateList = [
  {
    id: 1,
    dateImg: movieDate,
    dateImgAlt: "Movie Date",
    dateName: "Movie Date",
    dateMsg:
      "A Moive Date! i love that we shall discuss what should we watch then",
  },
  {
    id: 2,
    dateImg: aquariumDate,
    dateImgAlt: "Aquarium Date",
    dateName: "Aquarium Date",
    dateMsg:
      "Ooo quite the expensive but i would love if we can go to seaworld together :3 it's been a while",
  },
  {
    id: 3,
    dateImg: mallDate,
    dateImgAlt: "Mall Date",
    dateName: "Mall Date",
    dateMsg: "Nice! let's go shopping and buy couple clothes together!",
  },
  {
    id: 4,
    dateImg: dinnerDate,
    dateImgAlt: "Dinner Date",
    dateName: "Dinner Date",
    dateMsg:
      "How long since that last time i took you out for dinner? ;) i miss that",
  },
  {
    id: 5,
    dateImg: gameDate,
    dateImgAlt: "Game Date",
    dateName: "Game Date",
    dateMsg:
      "Let's go continue on that game (it takes two) that we haven't got to continue!",
  },
  {
    id: 6,
    dateImg: nsfwDate,
    dateImgAlt: "Nswf Date",
    dateName: "Secret Date 🤭",
    dateMsg: "Oh.. 😳 i see 🤭",
  },
];

export default function Place() {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleDivClick = (id) => {
    setSelectedDiv((prevSelectedDiv) => (prevSelectedDiv === id ? null : id));
  };

  const showMessage = () => {
    const selectedData = dateList.find((element) => element.id === selectedDiv);
    return selectedData ? <p>{selectedData.dateMsg}</p> : null;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col relative">
      <div className="mb-4">
        What do you want to do for valentine&apos;s? ☺️
      </div>
      <ul className="grid grid-cols-3 w-1/2 gap-8">
        {dateList.map((date) => (
          <li
            style={{
              backgroundImage: `url(${date.dateImg})`,
              boxShadow: "inset 0 -40px 12px 0 #00000090",
            }}
            key={date.id}
            onClick={() => handleDivClick(date.id)}
            className={`bg-cover bg-center w-full h-40 text-white flex items-end justify-center pb-2 hover:scale-105 transition-all cursor-pointer ${
              selectedDiv === date.id ? "scale-110 border-8 border-red-400" : ""
            }`}>
            {date.dateName}
          </li>
        ))}
      </ul>

      <button
        className={`w-20 h-7 bg-red-400 border border-black mt-4 active:scale-95 active:bg-red-500 ${
          selectedDiv === null ? "hidden" : "block"
        }`}
        onClick={handleShow}>
        Choose
      </button>
      <div
        className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 text-xl transition-all ${
          show ? "block" : "hidden"
        }`}>
        {showMessage()}
      </div>
    </div>
  );
}
