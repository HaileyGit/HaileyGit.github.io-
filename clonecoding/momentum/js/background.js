// const images = ["1.png", "2.png", "3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png",
// "12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png", "22.png", "23.png"];

const images = ["2.gif","3.gif","4.gif"]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.setAttribute('width', '100%');
bgImage.setAttribute('height', '100%');
bgImage.src = `img/${chosenImage}`;

document.getElementById("miniroom").appendChild(bgImage);