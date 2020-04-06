"use strict";

let pathImg = "./src/img/";

let mobile = document.querySelector("#mobile");
let selectCostume = document.createElement("select");

let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  let select = document.querySelector("select");
  select.classList.add("z-index-10");
});

closeMenu.addEventListener("click", () => {
  let select = document.querySelector("select");
  select.classList.remove("z-index-10");
});

let costume = [];

// costume.push({
//   name: "Масляна",
//   imgs: ["jokers", "impBlack", "gopak4", "ukrainians", "jokers2"],
//
// });

costume.push({
  name: "Venetian carnival costumes",
  imgs: ["kolombina", "arlekin", "goldvenice", "bauto", "arlekolomb"],
});

costume.push({
  name: "Rio de Janeiro carnival costumes",
  imgs: ["sambaRed", "samba2", "sambaOrange"],
});

costume.push({
  name: "Robots Transformers ALX-16 and ALX-17",
  imgs: ["robot1", "robot3", "robots5", "robot2", "robots4"],
});

costume.push({
  name: "Chess",
  imgs: ["chess1", "chess2", "chess3", "chess4"],
});

costume.push({
  name: "Gods of Egypt",
  imgs: ["egyptgods1", "Egypt2", "egypt3", "egypt1"],
});

costume.push({
  name: "Buffons",
  imgs: ["jokers", "joker1", "Skomoroh5", "joker2", "Skomoroh6", "jokers2", "joker3"],
});

costume.push({
  name: "White Birds",
  imgs: ["bird2", "bird4", "birds1"],
});

costume.push({
  name: "Three-heads Dragon Zmey Gorynych, flying Baba Yaga and Hut on hen's legs",
  imgs: ["gorynych", "izba1", "izba2", "babayaga", "izba3"],
});

costume.push({
  name: "Light Angels",
  imgs: ["lightAngels3", "lightangelsheart", "lightAngels1", "lightAngels2", "lightangels5"],
});

costume.push({
  name: "Riders",
  imgs: ["cowboy2", "ukrman3", "cowboy1", "riders"],
});

costume.push({
  name: "Angels",
  imgs: ["angelBlueWhite", "angelSilver", "angelBlackRed", "angelViolet"],
});

costume.push({
  name: "Butterflies",
  imgs: ["bflies3", "bflies1", "bflies5", "bflies4", "bflyGreen"],
});

costume.push({
  name: "№1, №2, №3",
  imgs: ["number1", "number2", "number3", "number1and2"],
});

costume.push({
  name: "Ukrainians",
  imgs: [
    "ukrainians",
    "ukrman3",
    "ukrman2",
    "ukrwoman1",
    "ukrwoman2",
    "ukrwoman4",
    "ukrwoman3",
    "ukrlight",
    "ukrwomen",
    "ukrman1",
  ],
});

costume.push({
  name: "Clowns",
  imgs: ["clownPink", "clowns5", "clowns6", "clownYellow"],
});

costume.push({
  name: "Avatars",
  imgs: ["Avatar1", "avatar5", "Avatar2", "Avatar3"],
});

costume.push({
  name: "Angel, Sun, Moon",
  imgs: ["angelok", "sun", "moon"],
});

costume.push({
  name: "Shopping ladies",
  imgs: ["shopping4", "shopping6", "shopping2", "shopping5", "shopping3"],
});

costume.push({
  name: "Can Can",
  imgs: ["cancan", "Cancan2", "cancan3"],
});

costume.push({
  name: "Ladies",
  imgs: ["damaViolet", "damaPink", "damaGreen", "damaRed"],
});

costume.push({
  name: "Gentlemen",
  imgs: ["gentleman1", "mushketeer2", "mushketeer1"],
});

costume.push({
  name: "Sailors",
  imgs: ["sailor1", "sailor2", "sailor3", "sailor4"],
});

costume.push({
  name: "Euro-2012",
  imgs: ["euroEngland", "euro", "euroSpain"],
});

costume.push({
  name: "Spanish costumes",
  imgs: ["spanishWoman2", "spanishMan", "spanishWoman1", "spanishAll"],
});

costume.push({
  name: "Russians",
  imgs: ["russianRed", "russiansAll", "russianWhite"],
});

costume.push({
  name: "Orient costumes",
  imgs: ["indiaViolet", "india", "indiaRed", "hottab", "orientprincess"],
});

costume.push({
  name: "Chinese costumes",
  imgs: ["chinaDragon", "chinaPink", "chinaWhite", "chinaGrey"],
});

costume.push({
  name: "New Year and Christmas costumes",
  imgs: ["NewMoroz", "MorozSnigurka2", "NewMoroz2", "santa", "angelok", "jalynka", "birds1", "MorozSnigurka"],
});

costume.push({
  name: "Halloween",
  imgs: ["pumpkin4", "BlackLady", "babayaga", "koko1", "gorynych", "pumpkin4", "VampKing1", "izba1"],
});

for (let i = 0; i < costume.length; i++) {
  createSlider(costume[i], i);
}

selectCostume.addEventListener("change", (ev) => {
  let value = ev.target.value;
  console.dir(value);
  location.href = value;
});

createSelect(costume, selectCostume);

function createSelect(costume, select) {
  select.classList.add("offset-3", "col-8", "position-fixed", "p-2", "rounded", "bg-light", "select-costume", "my-2");

  for (let i = 0; i < costume.length; i++) {
    let option = document.createElement("option");
    option.innerText = costume[i].name;
    option.setAttribute("value", `#costume${i}`);

    select.append(option);
  }

  mobile.prepend(select);
}

function createSlider(obj, id) {
  if (!obj) {
    console.log("Undefined costume");
    return;
  }
  console.log("Hello Slider");
  let costumeId = `costume${id}`;

  let div = document.createElement("div");
  div.classList.add("col-12", "px-4", "main", "text-center");
  let div1 = document.createElement("div");

  div1.classList.add("carousel", "slide", "pt-5");
  div1.setAttribute("id", costumeId);
  div1.setAttribute("data-ride", "false");
  costumeId = "#" + costumeId;

  let h5 = document.createElement("h5");
  h5.classList.add("main__header");
  h5.innerText = obj.name;

  let ol = document.createElement("ol");
  ol.classList.add("carousel-indicators");

  console.log(obj.imgs.length);

  for (let i = 0; i < obj.imgs.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-target", costumeId);
    li.setAttribute("data-slide-to", i);

    if (!i) li.classList.add("active");
    ol.append(li);
  }

  let div2 = document.createElement("div");
  div2.classList.add("carousel-inner", "border-silver");

  for (let i = 0; i < obj.imgs.length; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");

    div.classList.add("carousel-item");
    if (!i) div.classList.add("active");

    img.classList.add("d-block", "w-100");
    img.src = pathImg + obj.imgs[i] + ".jpg";

    img.setAttribute("alt", "Шахи");

    div.append(img);
    div2.append(div);
  }

  let aPrevious = document.createElement("a");
  let spanPrevious = document.createElement("span");
  let spanPrevious2 = document.createElement("span");

  aPrevious.classList.add("carousel-control-prev");
  aPrevious.setAttribute("href", costumeId);
  aPrevious.setAttribute("role", "button");
  aPrevious.setAttribute("data-slide", "prev");

  spanPrevious.classList.add("carousel-control-prev-icon");
  spanPrevious.setAttribute("aria-hidden", "true");

  spanPrevious2.classList.add("sr-only");
  spanPrevious2.innerText = "Previous";

  aPrevious.append(spanPrevious);
  aPrevious.append(spanPrevious2);

  let aNext = document.createElement("a");
  let spanNext = document.createElement("span");
  let spanNext2 = document.createElement("span");

  aNext.classList.add("carousel-control-next");
  aNext.setAttribute("href", costumeId);
  aNext.setAttribute("role", "button");
  aNext.setAttribute("data-slide", "next");

  spanNext.classList.add("carousel-control-next-icon");
  spanNext.setAttribute("aria-hidden", "true");

  spanNext2.classList.add("sr-only");
  spanNext2.innerText = "Next";

  aNext.append(spanNext);
  aNext.append(spanNext2);

  div1.append(h5);
  div1.append(ol);
  div1.append(div2);
  div1.append(aPrevious);
  div1.append(aNext);

  div.append(div1);

  mobile.append(div);
}
