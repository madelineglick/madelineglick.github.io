'use strict';
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "bubalu",
      category: "gloss",
      color: "red",
      image: "/img/portfolio-1.jpg",
    },
    {
      name: "eyebrowOil",
      category: "oil",
      color: "none",
      image: "/img/portfolio-2.jpg",
    },
    {
      name: "favSet",
      category: "set",
      color: "multi",
      image: "/img/portfolio-3.jpg",
    },
    {
      name: "bodyMist",
      category: "body",
      color: "multi",
      image: "/img/portfolio-4.jpg",
    },
    {
      name: "temptations",
      category: "gloss",
      color: "pink",
      image: "/img/portfolio-5.jpg",
    },
    {
      name: "pina",
      category: "gloss",
      color: "none",
      image: "/img/portfolio-6.jpg",
    },
    {
      name: "watermelon",
      category: "gloss",
      color: "pink",
      image: "/img/portfolio-7.jpg",
    },
    {
      name: "lipScrub",
      category: "scrub",
      color: "none",
      image: "/img/portfolio-8.jpg",
    },
    {
      name: "lipOil",
      category: "oil",
      color: "none",
      image: "/img/portfolio-9.jpg",
    },
  ];
  const createBtn = document.querySelector(".createBtn");
  const editBtn = document.getElementById("editBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const addBtn = document.getElementById("addBtn");
  const inputDiv = document.getElementById("newProductInputs");
  const greenDiv = document.getElementById("createDiv");
  const blueDiv = document.getElementById("editDiv");
  const redDiv = document.getElementById("deleteDiv");
  inputDiv.style.visibility = "hidden";
  greenDiv.addEventListener("click", () => {
    inputDiv.style.visibility = "visible";
    greenDiv.style.color = 'green';
    blueDiv.style.color = 'black';
    redDiv.style.color = 'black';
  });
  blueDiv.addEventListener("click", () => {
    inputDiv.style.visibility = "hidden";
    greenDiv.style.color = 'black';
    blueDiv.style.color = 'blue';
    redDiv.style.color = 'black';
    /* create new element */
});
  redDiv.addEventListener("click", () => {
    inputDiv.style.visibility = "hidden";
    greenDiv.style.color = 'black';
    blueDiv.style.color = 'black';
    redDiv.style.color = 'red';
});
});