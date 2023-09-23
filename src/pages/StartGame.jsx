import like from "../images/like.jpg";
import dislike from "../images/dislike.jpg";
import correct from "../images/true.png";
import notcorrect from "../images/notcorrect.png";
import { useState, useEffect } from "react";
import { mydata } from "../data.js";
import { AiOutlineStar } from "react-icons/ai";
import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router-dom";
const StarRating = ({ count }) => {
  const starsArray = Array.from(Array(count).keys());

  return (
    <div>
      {starsArray.map((star, index) => (
        <AiOutlineStar key={index} />
      ))}
    </div>
  );
};
const SadRating = ({ count }) => {
  const sadArray = Array.from(Array(count).keys());

  return (
    <div>
      {sadArray.map((star, index) => (
        <TbMoodSad key={index} />
      ))}
    </div>
  );
};
export const StartGame = () => {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [index, setIndex] = useState(0);
  const [imageBehavior, setImagwBehavior] = useState(mydata[index]);
  const handelClickTrue = () => {
    {
      if (imageBehavior.behavior === true) {
        setCountUp(countUp + 1);
      } else {
        setCountDown(countDown + 1);
      }
      setIndex(index + 1);
      setImagwBehavior(mydata[index + 1]);
    }
  };

  const handelClickFalse = () => {
    {
      if (imageBehavior.behavior === false) {
        setCountUp(countUp + 1);
      } else {
        setCountDown(countDown + 1);
      }
      setIndex(index + 1);
      setImagwBehavior(mydata[index + 1]);
    }
  };
  useEffect(() => {
    console.log("Image behavior changed:", imageBehavior);
  }, [imageBehavior]);
  const imageslider = () => {};
  return (
    <div>
      <div className="grid-container">
        <div className="pictureLike">
          <img className="img" src={like} />
        </div>
        <div className="picturedisLike">
          <img className="img" src={dislike} />
        </div>
        <div className="countUp">
          Your Score: {countUp} <StarRating count={countUp} />
        </div>
        <div className="coundDown">
          Your Score:{countDown}{" "}
          <SadRating className="icon" count={countDown} />
        </div>
        <div className="BehaviorImage">
          {imageBehavior ? (
            <img className="img" src={imageBehavior.img} />
          ) : (
            <h3 className="myresult">
              You answered:{" "}
              <span className="countrest"> {countUp} correct</span>, and
              <span className="countdownresult"> {countDown} not correct </span>
              <Link to="/" className="centered-link">
                back to home page
              </Link>
            </h3>
          )}
        </div>
        <div className="correct">
          <img className="img" onClick={handelClickTrue} src={correct} />
        </div>
        <div className="notCorrect">
          <img className="img" onClick={handelClickFalse} src={notcorrect} />
        </div>
      </div>
    </div>
  );
};
