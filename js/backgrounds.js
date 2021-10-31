const images = ["1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");
console.log(bgImage);
//bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(img/${chosenImage})`;
//document.body.appendChild(bgImage);
