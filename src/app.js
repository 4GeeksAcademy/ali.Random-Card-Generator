/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let suit = ["♦", "♠", "♥", "♣"];
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let pickSuitIndex = () => Math.floor(Math.random() * suit.length);
  let pickValueIndex = () => Math.floor(Math.random() * value.length);

  function buildSuit() {
    let drawnSuit = suit[pickSuitIndex()];
    if (drawnSuit === "♥" || drawnSuit === "♦") {
      // Corrected typo from `drwan-suit` to `drawn-suit`
      let redSuit = `<div class="drawn-suit" style="color: red">${drawnSuit}</div>`;
      return redSuit;
    } else {
      let blackSuit = `<div class="drawn-suit">${drawnSuit}</div>`; // Standardized class name
      return blackSuit;
    }
  }

  function buildValue() {
    let drawnValue = value[pickValueIndex()];
    return drawnValue;
  }

  function drawCard() {
    let suit = buildSuit();
    let value = buildValue();

    document.querySelector(".top-suit").innerHTML = suit;
    document.querySelector(".card-value").innerHTML = value;
    document.querySelector(".bottom-suit").innerHTML = suit;
  }

  // Added this function to organize code better and handle initial card display
  function displayCard() {
    document.querySelector(".card").innerHTML = `
      <div class="top-suit"></div>
      <div class="card-value"></div>
      <div class="bottom-suit"></div>`;
    drawCard();
  }

  displayCard();

  // Added event listener inside the onload function for the button to properly attach the event
  document.getElementById("reset").addEventListener("click", drawCard);
};
