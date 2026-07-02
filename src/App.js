import logo from './logo.svg';
import melt from "./Songs/kehlanimelt.mp3"
import goodforyou from "./Songs/selenagomezgoodforyou.mp3"
import busywoman from "./Songs/sabrinacarpenterbusywoman.mp3"
import videogames from "./Songs/lanadelreyvideogames.mp3"
import whereismyhusband from "./Songs/rayewhereismyhusband.mp3"
import childsplay from "./Songs/drakechildsplay.mp3"
import tummyhurts from "./Songs/reneerapptummyhurts.mp3"
import happier from "./Songs/edsheeranhappier.mp3"
import pinkponyclub from "./Songs/chappellroanpinkponyclub.mp3"
import angostura from "./Songs/keshiangostura.mp3"
import donttaptheglasstweakin from "./Songs/tylerthecreatordonttaptheglasstweakin.mp3"
import pinkwhite from "./Songs/frankoceanpinkwhite.mp3"
import iloveyouimsorry from "./Songs/gracieabramsiloveyouimsorry.mp3"
import holidays from "./Songs/conangrayholidays.mp3"
import corneliastreet from "./Songs/taylorswiftcorneliastreet.mp3"
import bad from "./Songs/wavetoearthbad.mp3"
import thehardestpart from "./Songs/oliviadeanthehardestpart.mp3"
import dejavu from "./Songs/oliviarodrigodejavu.mp3"
import ithinkilikeyoubetterwhenyouregone from "./Songs/reneerappithinkilikeyoubetterwhenyouregone.mp3"
import oceaneyes from "./Songs/billieeilishoceaneyes.mp3"
import ceilings from "./Songs/lizzymcalpineceilings.mp3"
import backburner from "./Songs/nikibackburner.mp3"
import spite from "./Songs/omarapollospite.mp3"
import bestpart from "./Songs/danielcaesarbestpart.mp3"
import endphoto from "./end.jpeg"
import './App.css';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("page") || "page1";
  });
  const [answerMood, setAnswerMood] = useState("good");
  const [showLink, setShowLink] = useState(false);
  const [flash, setFlash] = useState(true);

  const [value, setValue] = useState();
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clueNumber, setClueNumber] = useState(() => {
    return Number(localStorage.getItem("clueNumber")) || 0;
  });
  const [clueOverallNumber, setClueOverallNumber] = useState(() => {
    return Number(localStorage.getItem("clueOverallNumber")) || 0;
  });

  const correctValue = [1, 14, 2, 55, 3, 29, 1, 38, 2, 17, 0, 18, 1, 15, 1, 30];
  const correctWord = ["yoga", "bag", "west hollywood", "swimming pool", "roof", "ice cream", "movie", "sunrise"]
  const correctWords = [
    { answer: "yoga", number: 1 },
    { answer: "bag", number: 1 },
    { answer: "west hollywood", number: 2 },
    { answer: "swimming pool", number: 2 },
    { answer: "roof", number: 1 },
    { answer: "ice cream", number: 2 },
    { answer: "movie", number: 1 },
    { answer: "sunrise", number: 1 },
  ];
  const maxWords = correctWords[clueOverallNumber].number;
  const songs = [melt, goodforyou, busywoman, videogames, whereismyhusband, childsplay, tummyhurts, happier, pinkponyclub, angostura, donttaptheglasstweakin, pinkwhite, iloveyouimsorry, holidays, corneliastreet, bad, thehardestpart, dejavu, ithinkilikeyoubetterwhenyouregone, oceaneyes, ceilings, backburner, spite, bestpart];

  const handleInput = (event) => {
    // only allow digits + max 2 chars
    const val = event.target.value.replace(/\D/g, "").slice(0, 2);
    setValue(val);
    setIsError(false); // reset error while typing
    setIsCorrect(false);
  };

  const handleWord = (e) => {
    const val = e.target.value;
    const words = val.trim().split(/\s+/);

    if (words.length > maxWords) return;

    setValue(val);
  };

  const handleBlur = () => {
    if (value.length > 0) {
      setIsError(parseInt(value, 10) !== correctValue[clueNumber]);
      setIsCorrect(parseInt(value, 10) === correctValue[clueNumber]);
    }
  };

  const handleWordBlur = () => {
    if (value.length > 0) {
      setIsError(value !== correctWord[clueOverallNumber]);
      setIsCorrect(value === correctWord[clueOverallNumber]);
    }
    else {
      setIsError(false);
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (page === "page4") {
      const timer = setTimeout(() => {
        setPage("page5");
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }

    if (page === "page7") {
      const timer = setTimeout(() => {
        setPage("page8");
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }

    if (page === "page8") {
      const timer = setTimeout(() => {
        setPage("page9");
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }
    if (page === "page9") {
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page9") {
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page12") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page15") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page18") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page21") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page24") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page27") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page30") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (page === "page33") {
      if (flash) {
        setShowLink(false);
      }
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
}, [page]);

const openSpotify = () => {
    setPage("page10");
    window.open('https://open.spotify.com/playlist/36OiBRj5oJQCKLXinN9mCZ?si=3c6725159dbc4e72&pt=48fc06dca29e2b4b81e8f28fe95e240e', '_blank', 'noopener,noreferrer');
  };

const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);

const toggleAudio = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
  } else {
    audio.play();
    setIsPlaying(true);
  }
};

useEffect(() => {
  const audio = new Audio(songs[clueNumber + clueOverallNumber]);
  audioRef.current = audio;

  return () => {
    audio.pause();
  };
}, [clueNumber, clueOverallNumber]);

useState(() => {
  if (page !== "page12" || page !== "page15" || page !==  "page18" || page !==  "page21" || page !== "page24" || page !== "page27" || page !== "page30" || page !== "page33") {
    setShowLink(true);
  }
});

useEffect(() => {
  localStorage.setItem("clueNumber", clueNumber);
  localStorage.setItem("clueOverallNumber", clueOverallNumber);
  localStorage.setItem("page", page);
}, [clueNumber, clueOverallNumber, page]);

  return (
    <>
      {page === "page1" && (
        <div className="page">
          <div className="message">hi darahnea</div>
          <div className="button" role="button" onClick={() => {setPage("page2")}}>hello</div>
          <div className="button" role="button" onClick={() => {setPage("page12")}}>Skip</div>
        </div>
      )}
      {page === "page2" && (
        <div className="page">
          <div className="message">happy birthday :)</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button back" role="button" onClick={() => {setPage("page1")}}>back</div>
            <div className="button" role="button" onClick={() => {setPage("page3")}}>thank you</div>
          </div>
        </div>
      )}
      {page === "page3" && (
        <div className="page">
          <div className="message">do you know what the purpose of this website is?</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button good" role="button" onClick={() => {
              setPage("page4");
              setAnswerMood("good"); 
            }}>yes</div>
            <div className="button bad" role="button" onClick={() => {
              setPage("page4")
              setAnswerMood("bad")
            }}>no</div>
          </div>
          <div>
            <div className="button back below" role="button" onClick={() => {setPage("page2")}}>back</div>
          </div>
        </div>
      )}
      {page === "page4" && answerMood === "bad" && (
        <div className="page">
          <div className="message">good, a little mystery still</div>
        </div>
      )}
      {page === "page4" && answerMood === "good" && (
        <div className="page">
          <div className="message">good, i'm glad you've picked up on it</div>
        </div>
      )}
      {page === "page5" && (
        <div className="page">
          <div className="message">before we start, who loves the other person more?</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button good" role="button" onClick={() => {
              setAnswerMood("good")
              setPage("page7")
            }}>he loves you more</div>
            <div className="button bad" role="button" onClick={() => {
              setAnswerMood("bad")
              setPage("page6")
            }}>you love him more</div>
          </div>
          <div>
            <div className="button back below" role="button" onClick={() => {setPage("page3")}}>back</div>
          </div>
        </div>
      )}
      {page === "page6" && (
        <div className="page">
          <div className="message">try again</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button good" role="button" onClick={() => {
              setAnswerMood("good")
              setPage("page7")
            }}>he loves you more</div>
            <div className="button bad" role="button" onClick={() => {
              setAnswerMood("bad")
              setPage("page6")
            }}>you love him more</div>
          </div>
          <div>
            <div className="button back below" role="button" onClick={() => {setPage("page3")}}>back</div>
          </div>
        </div>
      )}
      {page === "page7" && answerMood === "good" && (
        <div className="page">
          <div className="message">that's correct :)</div>
        </div>
      )}
      {page === "page8" && (
        <div className="page">
          <div className="message">now onto...</div>
        </div>
      )}
      {page === "page9" && (
        <div className="page">
          <div className="message title">brain game no. 10</div>
          <div className="message title">🥳</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", textAlign: "center"}}>
            <div className="button" id="spotify" role="button" style={showLink === false ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => {openSpotify()}}>start game</div>
          </div>
          <div>
            <div className="button back below" style={{marginTop: "20px"}} role="button" onClick={() => {setPage("page5")}}>back</div>
          </div>
        </div>
      )}
      {page === "page10" && (
        <div className="page">
          <div className="message instructions title">general information</div>
          <div className="message instructions" style={{marginTop: "40px"}}>1) there are eight clues in this game.</div>
          <div className="message instructions" style={{marginTop: "20px"}}>2) every clue will reveal information about what's in store for tomorrow.</div>
          <div className="message instructions" style={{marginTop: "20px"}}>3) each clue is grouped by every three songs in the playlist, in order.</div>
          <div className="message instructions" style={{marginTop: "40px"}}>capeesh?</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button good" role="button" onClick={() => {
              setAnswerMood("good")
              setPage("page12")
            }}>capeesh</div>
            <div className="button bad" role="button" onClick={() => {
              setAnswerMood("bad")
              setPage("page11")
            }}>caposh</div>
          </div>
          <div>
            <div className="button back below" style={{marginTop: "10px"}} role="button" onClick={() => {setPage("page9")}}>back</div>
          </div>
        </div>
      )}
      {page === "page11" && (
        <div className="page">
          <div className="message instructions title">general information</div>
          <div className="message instructions" style={{marginTop: "40px"}}>1) there are eight clues in this game.</div>
          <div className="message instructions" style={{marginTop: "20px"}}>2) every clue will reveal information about what's in store for tomorrow.</div>
          <div className="message instructions" style={{marginTop: "20px"}}>3) each clue is grouped by every three songs in the playlist, in order.</div>
          <div className="message instructions" style={{marginTop: "40px"}}>capeesh?</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button good" role="button" onClick={() => {
              setAnswerMood("good")
              setPage("page12")
            }}>capeesh</div>
            <div className="button good" role="button" onClick={() => {
              setAnswerMood("good")
              setPage("page12")
            }}>capeesh</div>
          </div>
          <div>
            <div className="button back below" style={{marginTop: "20px"}} role="button" onClick={() => {setPage("page9")}}>back</div>
          </div>
        </div>
      )}
      {page === "page12" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#99ABBF", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#1" : "#1a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/81C-5-PrMVL._UF1000,1000_QL80_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#D5D1D2"}} className="song name">melt</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#49554D"}} className="song artist">Kehlani</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message clue">how many bedrooms in that apartment where your heart is?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page10");
              setIsError(false);
              setIsCorrect(false);
              setValue();
              setIsPlaying(false);
              setFlash(true);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page13");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page13" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#6E6E6E", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#1" : "#1b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/71vX94MBGIL._UF1000,1000_QL80_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#D6D6D6", fontSize: "20px", top: "400px"}} className="song name">Good For You (feat. A$AP Rocky)</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="song artist">Selena Gomez (feat. A$AP Rocky)</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">how many carats?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page12");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page14");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page14" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#478AA4", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#1</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : 14</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/81LtMzbDEaL._UF1000,1000_QL80_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#F3E5DA"}} className="song name">Busy Woman</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#95B6C8"}} className="song artist">Sabrina Carpenter</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (1):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page13");
              setIsError(false);
              setIsCorrect(true);
              setValue(14);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page15");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page15" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#7693C6", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#2" : "#2a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/71tNTXwwWFL._SX466_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#FFFFFF"}} className="song name">Video Games</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#BFA08C"}} className="song artist">Lana Del Rey</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message clue">they say that the world was built for</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page14");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("yoga");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page16");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page16" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#BF000F", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#2" : "#2b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">2 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/51oE-x+dS6L._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#E0D4CC", fontSize: "20px", top: "400px"}} className="song name">WHERE IS MY HUSBAND!</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#EB5268"}} className="song artist">RAYE</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">tell him i'm kind, tell him i'm</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page15");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(2);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page17");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page17" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#8A979F", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#2</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">2 : 55</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#512327"}} className="song name">Childs Play</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#4B5964"}} className="song artist">Drake</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (1):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page16");
              setIsError(false);
              setIsCorrect(true);
              setValue(55);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page18");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page18" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#0F3C4C", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#3" : "#3a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b27308688d64d1b26bbee0e87857" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#DDC9BD"}} className="song name">Tummy Hurts</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#BFA08C"}} className="song artist">Reneé Rapp</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message clue">couldn't pay rent for how many months?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page17");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("bag");
              setIsPlaying(false);
              setFlash(true);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page19");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page19" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#0163AE", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#3" : "#3b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">3 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/B1HYJn9MrPS._UF1000,1000_QL80_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#54C6D9"}} className="song name">happier</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#F1F4F5"}} className="song artist">Ed Sheeran</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message clue">saw you in another's arms walking down park and</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page18");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(3);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page20");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page20" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#BB4453", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#3</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">3 : 29</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/41ZA9jXuKiL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#FC9BAF"}} className="song name">Pink Pony Club</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#492125"}} className="song artist">Chappell Roan</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (2):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{width: "275px"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page19");
              setIsError(false);
              setIsCorrect(true);
              setValue(29);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page21");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page21" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#68191C", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#4" : "#4a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/610ps7rUjaL._UF1000,1000_QL80_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#AA262C"}} className="song name">ANGOSTURA</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#C4BFC5"}} className="song artist">keshi</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">go out how many more times?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page20");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("west hollywood");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page22");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page22" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#CA2830", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#4" : "#4b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/31sDbu7nBBL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#A38951", fontSize: "20px", top: "400px"}} className="song name">Don't Tap That Glass / Tweakin'</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#C4BFC5"}} className="song artist">Tyler, The Creator</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">i'm an old soul, i'm a</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page21");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(1);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page23");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page23" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#088044", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#4</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : 38</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/41JbqQVjLkL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#FC9BAF"}} className="song name">Pink + White</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#FFFFFF"}} className="song artist">Frank Ocean</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (2):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{width: "275px"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page22");
              setIsError(false);
              setIsCorrect(true);
              setValue(38);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page24");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page24" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#F5ED55", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px", color: "#000000"}} className="message clue-title">{showLink === false ? "#5" : "#5a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/511KLLzRSLL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#2E1D10"}} className="song name">I Love You, I'm Sorry</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#000000"}} className="song artist">Gracie Abrams</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message clue">i told you the truth how many augusts ago?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{color: "#000000"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page23");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("swimming pool");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page25");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page25" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#2C527A", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#5" : "#5b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">2 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/41LNUYbw9yL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#C1C4C3"}} className="song name">Holidays</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#D2D5D4"}} className="song artist">Conan Gray</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">felt so old at only</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page24");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(2);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page26");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page26" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#CCA6DB", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#5</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">2 : 17</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/41eqMwm5L2L._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#F5ECA4"}} className="song name">Cornelia Street</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#5D99D0"}} className="song artist">Taylor Swift</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (1):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page25");
              setIsError(false);
              setIsCorrect(true);
              setValue(17);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page27");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page27" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#D0D8DA", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px", color: "#000000"}} className="message clue-title">{showLink === false ? "#6" : "#6a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b27324f8c3ad20b7c6cfecb5832e" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#2E1D10"}} className="song name">bad</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#000000"}} className="song artist">wave to earth</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message clue">how many things left to watch on Netflix?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{color: "#000000"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page26");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("roof");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page28");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page28" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#B05A89", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#6" : "#6b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">0 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://f4.bcbits.com/img/a1894279631_16.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#E69D60"}} className="song name">The Hardest Part</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#A31A44"}} className="song artist">Olivia Dean</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message clue">you say i'm different now like that's so strange, but i was only</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page27");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(0);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page29");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page29" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#AA92C9", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#6</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">0 : 18</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#F1B4EE"}} className="song name">deja vu</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#F3BE40"}} className="song artist">Olivia Rodrigo</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (2):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page28");
              setIsError(false);
              setIsCorrect(true);
              setValue(18);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page30");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page30" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#C2AE90", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px", color: "#000000"}} className="message clue-title">{showLink === false ? "#7" : "#7a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://m.media-amazon.com/images/I/51KD28HEXkL._UX500_FMwebp_QL85_.jpg" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#2E1D10", fontSize: "18px", top: "400px", textAlign: "center", width: "75%"}} className="song name">I Think I Like You Better When You're Gone</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#000000", top: "450px"}} className="song artist">Reneé Rapp</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000", top: "500px"}} className="message clue">how many weeks until you get back?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{color: "#000000", top: "560px"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "620px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page29");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("ice cream");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page31");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page31" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#DC2738", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#7" : "#7b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#E8D171"}} className="song name">ocean eyes</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#B1A9A7"}} className="song artist">Billie Eilish</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">how many flares?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page30");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(1);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page32");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page32" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#4B2018", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#7</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : 15</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b2731e7c02b74d1beefca663be04" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#DAC781"}} className="song name">ceilings</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#A15011"}} className="song artist">Lizzy McAlpine</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (1):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page31");
              setIsError(false);
              setIsCorrect(true);
              setValue(15);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page33");
              setClueOverallNumber(clueOverallNumber + 1);
              setIsPlaying(false);
              setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page33" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#E1D8D0", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px", color: "#000000"}} className="message clue-title">{showLink === false ? "#8" : "#8a"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message answer">_ : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b27389aa3d00d339b8948374782b" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#60352E"}} className="song name">Backburner</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#000000"}} className="song artist">NIKI</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#000000"}} className="message clue">how long until you fade away again?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
              style={{color: "#000000"}}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page32");
              setIsError(false);
              setIsCorrect(true);
              setClueOverallNumber(clueOverallNumber - 1);
              setValue("movie");
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page34");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              setFlash(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page34" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#1D5C6E", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">{showLink === false ? "#8" : "#8b"}</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : __</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b27322ae1eea79ae55cca3e0f42a" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none", color: "#D5D1D2"} : {display: "block", color: "#78A7BB"}} className="song name">Spite</div>
          <div style={showLink === false ? {display: "none", color: "#49554D"} : {display: "block", color: "#A89167"}} className="song artist">Omar Apollo</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">how many days on vacation?</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="numeric"
              value={value}
              onChange={handleInput}
              onBlur={handleBlur}
              className={`number-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page33");
              setIsError(false);
              setIsCorrect(true);
              setClueNumber(clueNumber - 1);
              setValue(1);
              setIsPlaying(false);
              setFlash(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page35");
              setClueNumber(clueNumber + 1);
              setIsPlaying(false);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page35" && (
        <div className="page" style={showLink === false ? {} : {backgroundColor: "#86B0BC", color: "white"}}>
          <div style={showLink === false ? {fontSize: "70px"} : {position: "absolute", fontSize: "25px"}} className="message clue-title">#8</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}} className="message answer">1 : 30</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <div style={showLink === false ? {display: "none", borderColor: "white"} : {display: "block", borderColor: "white"}} className="image-container" onClick={toggleAudio}>
              <img src="https://i.scdn.co/image/ab67616d0000b2737aa8783ad8def37cc548a9cf" alt="image"/>
              {!isPlaying && (
                <div className="overlay">
                  <div className="play-button">▶</div>
                </div>
              )}
            </div>
          </div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#FFFFFF"}} className="song name">Best Part</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", color: "#545868"}} className="song artist">Daniel Caesar (feat. H.E.R.)</div>
          <div style={showLink === false ? {display: "none"} : {display: "block", top: "490px"}} className="message clue">clue (1):</div>
          <div style={showLink === false ? {display: "none"} : {display: "block"}}>
            <input 
              inputMode="text"
              value={value}
              onChange={handleWord}
              onBlur={handleWordBlur}
              className={`word-input ${isError ? "error" : (isCorrect ? "correct" : "")}`}
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "600px"}}>
            <div style={showLink === false ? {display: "none"} : {display: "block"}} className="button last-clue" role="button" onClick={() => {
              setPage("page34");
              setIsError(false);
              setIsCorrect(true);
              setValue(30);
              setClueNumber(clueNumber - 1);
              setIsPlaying(false);
              }}>back</div>
            <div style={isCorrect === false ? {display: "none"} : {display: "block"}} className="button next-clue" role="button" onClick={() => {
              setIsCorrect(false);
              setIsError(false);
              setValue();
              setPage("page36");
              // setClueOverallNumber(clueOverallNumber + 1);
              // setIsPlaying(false);
              // setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page36" && (
        <div className="page">
          <div className="message finish title">congrats!</div>
          <div className="message finish title" style={{marginTop: "20px"}}>🥳</div>
          <div className="message instructions" style={{marginTop: "20px"}}>you completed the brain game!</div>
          <div className="message instructions" style={{marginTop: "30px", textDecoration: "underline"}}>entire list of clues:</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#1: yoga</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#2: bag</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#3: west hollywood</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#4: swimming pool</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#5: roof</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#6: ice cream</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#7: movie</div>
          <div className="message instructions" style={{marginTop: "10px"}}>#8: sunrise</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button last-clue" role="button" onClick={() => {
              setPage("page35")
              setIsError(false);
              setIsCorrect(true);
              setValue("sunrise");
              setIsPlaying(false);
              }}>back</div>
            <div className="button below" role="button" onClick={() => {
              setPage("page37");
              // setClueOverallNumber(clueOverallNumber + 1);
              // setIsPlaying(false);
              // setFlash(true);
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page37" && (
        <div className="page">
          {/* <div className="message finish title">congrats!</div>
          <div className="message finish title" style={{marginTop: "20px"}}>🥳</div> */}
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>happy birthday darahnea</div>
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>thank you for being the reason i make these games</div>
          {/* <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>thank you for being my girlfriend, my best friend, the most incredibly caring and beautiful woman i know</div> */}
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button last-clue" role="button" onClick={() => {
              setPage("page36")
              }}>back</div>
            <div className="button below" role="button" onClick={() => {
              setPage("page38");
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page38" && (
        <div className="page">
          {/* <div className="message finish title">congrats!</div>
          <div className="message finish title" style={{marginTop: "20px"}}>🥳</div> */}
          {/* <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>happy birthday darahnea</div>
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>thank you for being the reason i make these games</div> */}
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>thank you for being my girlfriend, my best friend, the most incredibly caring and beautiful person to me</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <div className="button last-clue" role="button" onClick={() => {
              setPage("page37")
              }}>back</div>
            <div className="button below" role="button" onClick={() => {
              setPage("page39");
              }}>next</div>
          </div>
        </div>
      )}
      {page === "page39" && (
        <div className="page">
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px", position: "absolute", top: "45%"}}>i love you</div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "absolute", top: "50%"}}>
            <div className="button below" role="button" onClick={() => {
              setPage("page40");
              }}>i love you</div>
          </div>
          <div className="button back below" style={{marginTop: "50px", position: "absolute", top: "75%"}} role="button" onClick={() => {
              setPage("page38");
              }}>back</div>
        </div>
      )}
      {page === "page40" && (
        <div className="page">
          {/* <div className="message finish title">congrats!</div>
          <div className="message finish title" style={{marginTop: "20px"}}>🥳</div> */}
          {/* <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>happy birthday darahnea</div>
          <div className="message" style={{marginTop: "20px", width: "80%", fontSize: "20px"}}>thank you for being the reason i make these games</div> */}
          <div className="image-container-final">
              <img src={endphoto} alt="image"/>
          </div>
          <div className="button back below" style={{marginTop: "50px", position: "absolute", top: "75%"}} role="button" onClick={() => {
              setPage("page39");
              }}>back</div>
        </div>
      )}
    </>
  );
}

export default App;
