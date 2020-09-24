/*
 *  Creator: Hailey Gillespie
 *  License: GNU General Public License
 *  Last Updated: Sept. 23rd, 2020 
 */
"use strict";

var card = document.getElementById("card");
var back = document.getElementById("back");
var front = document.getElementById("front");

card.addEventListener("click", flipCard);

function flipCard() {
    back.style.display = "none";
    card.style.animation = "flipAni .1s linear 1";
    card.style.backgroundImage = "none";
    front.style.display = "block";
}