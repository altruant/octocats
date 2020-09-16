'use strict'

const ul = document.querySelector("ul.octodex")

const li1 = document.createElement("li");
li1.setAttribute('class', 'octocat');
const li2 = document.createElement("li");
li2.setAttribute('class', 'octocat');
const li3 = document.createElement("li");
li3.setAttribute('class', 'octocat');

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

const queer = document.createElement("a");
queer.setAttribute('href', 'https://octodex.github.com/octoqueer/');
const luchador = document.createElement("a");
luchador.setAttribute('href', 'https://octodex.github.com/luchadortocat/')
const dune = document.createElement("a");
dune.setAttribute('href', 'https://octodex.github.com/dunetocat/');

li1.appendChild(queer)
li2.appendChild(luchador)
li3.appendChild(dune)

const queerImg = document.createElement('img');
queerImg.setAttribute('src', 'https://octodex.github.com/images/Octoqueer.png');
const luchaImg = document.createElement('img');
luchaImg.setAttribute('src', 'https://octodex.github.com/images/luchadortocat.png');
const duneImg = document.createElement('img');
duneImg.setAttribute('src', 'https://octodex.github.com/images/dunetocat.png');

queer.appendChild(queerImg);
luchador.appendChild(luchaImg);
dune.appendChild(duneImg);

const footer1 = document.createElement('div');
footer1.setAttribute('class', 'image-footer')
const footer2 = document.createElement('div');
footer2.setAttribute('class', 'image-footer')
const footer3 = document.createElement('div');
footer3.setAttribute('class', 'image-footer');

li1.appendChild(footer1);
li2.appendChild(footer2);
li3.appendChild(footer3);

const imgNum1 = document.createElement('span');
imgNum1.setAttribute('class', 'image-number');
imgNum1.textContent = 112;
const imgNum2 = document.createElement('span');
imgNum2.textContent = 111;
imgNum2.setAttribute('class', 'image-number');
const imgNum3 = document.createElement('span');
imgNum3.textContent = 110;
imgNum3.setAttribute('class', 'image-number');

footer1.appendChild(imgNum1);
footer2.appendChild(imgNum2);
footer3.appendChild(imgNum3);

const imgCaption1 = document.createElement('div');
const imgCaption2 = document.createElement('div');
const imgCaption3 = document.createElement('div');
imgCaption1.setAttribute('class', 'image-caption');
imgCaption2.setAttribute('class', 'image-caption');
imgCaption3.setAttribute('class', 'image-caption');

footer1.appendChild(imgCaption1);
footer2.appendChild(imgCaption2);
footer3.appendChild(imgCaption3);
