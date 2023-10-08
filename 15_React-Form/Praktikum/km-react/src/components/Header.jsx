import { article } from "./Article";
import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const [text, setText] = useState("en");

  const changeText = () => {
    setText(text === "en" ? "id" : "en");
  };

  // Random Number
  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * max - min);
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1, 1000));
    // console.log(num);
  };
  // Random Number

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
          alt=""
          className="h-full"
          style={{ width: "20%" }}
        />
      </div>
      <div className="d-flex justify-content-center mb-2">
        <h1>{article.title[text]}</h1>
      </div>
      <div className="d-flex justify-content-center text-center">
        <p>{article.description[text]}</p>
      </div>
      <div className="d-flex justify-content-center gap-md-3">
        <Button
          label="Change Language"
          style={{
            backgroundColor: "#0D6EFD",
            border: "none",
            color: "white",
          }}
          onClick={changeText}
        ></Button>
        <button
          className="btn btn-secondary"
          onClick={handleClick}
          style={{
            backgroundColor: "#0D6EFD",
            border: "none",
            color: "white",
          }}
        >
          Random Number : {num}
        </button>
      </div>
    </div>
  );
};

export default Header;
