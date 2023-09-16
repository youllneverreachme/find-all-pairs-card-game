const navTags = [
  {
    tag: "difficulty",
    subtags: [
      {
        subtagName: "easy",
        subtagClass: "easy",
      },
      {
        subtagName: "normal",
        subtagClass: "normal",
      },
      {
        subtagName: "hard",
        subtagClass: "hard",
      },
    ],
  },
  {
    tag: "size",
    subtags: [
      {
        subtagName: "16 cards",
        subtagClass: "16-cards",
      },
      {
        subtagName: "36 cards",
        subtagClass: "36-cards",
      },
    ],
  },
  {
    tag: "themes",
    subtags: [
      { subtagName: "dark fantasy", subtagClass: "dark-fantasy" },
      { subtagName: "nature", subtagClass: "nature" },
      { subtagName: "people", subtagClass: "people" },
      {
        subtagName: "JavaScript frameworks",
        subtagClass: "javascript-frameworks",
      },
      { subtagName: "surprise me", subtagClass: "surprise-me" },
    ],
  },
  {
    tag: "other",
    subtags: [
      {
        subtagName: "show rules",
        subtagClass: "show-rules",
      },
      {
        subtagName: "sound effects",
        subtagClass: "sound-effects",
      },
    ],
  },
];

const defaultSettings = {
  difficulty: "normal",
  size: "16-cards",
  themes: "dark-fantasy",
  other: { "show-rules": true, "sound-effects": true },
};
const decks = [
  {
    deckName: "nature",
    deckImg: "./assets/images/nature/img_1.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "dark-fantasy",
    deckImg: "./assets/images/nature/img_2.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "people",
    deckImg: "./assets/images/nature/img_3.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "javascript-frameworks",
    deckImg: "./assets/images/nature/img_4.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "surprise-me",
    deckImg: "./assets/images/nature/img_5.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
];
const gameStates = {
  idle: "idle",
  pause: "pause",
  resume: "resume",
  game: "game",
  gameoverSuccess: "gameoverSuccess",
  gameoverFailure: "gameoverFailure",
};

const timers = [
  {
    timerClass: "target-time",
    timerName: "target time:",
    timerUnitMin: "00",
    timerUnitSec: "30",
    timerUnitMsec: "00",
  },
  {
    timerClass: "current-game-time",
    timerName: "time:",
    timerUnitMin: "00",
    timerUnitSec: "00",
    timerUnitMsec: "00",
  },
  {
    timerClass: "best-time",
    timerName: "best time:",
    timerUnitMin: "--",
    timerUnitSec: "--",
    timerUnitMsec: "--",
  },
];
export { navTags, defaultSettings, decks, gameStates, timers };
