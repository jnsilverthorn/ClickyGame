import React, { useState } from "react";
import AJ7 from "../assets/images/AJ7.jpg";
import GW1 from "../assets/images/GW1.jpg";
import JA2 from "../assets/images/JA2.jpg";
import JKP11 from "../assets/images/JKP11.jpg";
import JM4 from "../assets/images/JM4.jpg";
import JM5 from "../assets/images/JM5.jpg";
import JQA6 from "../assets/images/JQA6.jpg";
import JT10 from "../assets/images/JT10.jpg";
import MVB8 from "../assets/images/MVB8.jpg";
import TJ3 from "../assets/images/TJ3.jpg";
import WHH9 from "../assets/images/WHH9.jpg";
import ZT12 from "../assets/images/ZT12.jpg";

let clickedArray = [];
let score = 0;

export const Card = () => {
    let [state, setState] = useState("A");
    let pictureArray = [AJ7, GW1, JA2, JKP11, JM4, JM5, JQA6, JT10, MVB8, TJ3, WHH9, ZT12];


    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    shuffle(pictureArray);

    function click(e) {
        if (state === "A") {
            setState("B");
        } else if (state === "B") {
            setState("A");
        };
        postClick(e);
    }

    function reset() {
        alert("You already clicked that one!");
        clickedArray = [];
        score = 0;
    }

    function push(newValue) {
        clickedArray.push(newValue)
        score++;
        console.log("Score: " + score);
    }

    function postClick(e) {
        let newValue = e.target.id;
        clickedArray.indexOf(newValue) === -1 ? push(newValue) : reset();
    }

    return (
        <div>
            <div className="scoreboard">
                <div className="userScore">Your Score: {score}</div>
            </div>

            <div className="pictureBox">
                {pictureArray.map(result => (
                    <img onClick={(e) => click(e)} alt="clickPic" src={result} id={result} className="image" width="175x" height="175px" />
                ))}
            </div>
        </div>

    )
};