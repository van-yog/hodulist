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
//   imgs: ["jokers", "imp_black", "gopak_4", "ukrainians", "jokers_2"],
//
// });

costume.push({
  name: "Venetian carnival costumes",
  imgs: ["kolombina", "arlekin", "goldvenice", "bauto", "arlekolomb"],
});

costume.push({
  name: "Rio de Janeiro carnival costumes",
  imgs: ["sambaRed", "samba_2", "samba_orange"],
});

costume.push({
  name: "Robots Transformers ALX-16 and ALX-17",
  imgs: ["robot_1", "robot3", "robots_5", "robot_2", "robots_4"],
});

costume.push({
  name: "Chess",
  imgs: ["chess_1", "chess_2", "chess_3", "chess_4"],
});

costume.push({
  name: "Gods of Egypt",
  imgs: ["egypt_gods_1", "Egypt2", "egypt_3", "egypt_1"],
});

costume.push({
  name: "Buffons",
  imgs: ["jokers", "joker_1", "skomoroh_5", "joker_2", "skomoroh_6", "jokers_2", "joker_3"],
});

costume.push({
  name: "White Birds",
  imgs: ["bird_2", "bird_4", "birds_1"],
});

costume.push({
  name: "Three-heads Dragon Zmey Gorynych, flying Baba Yaga and Hut on hen's legs",
  imgs: ["gorynych", "izba_1", "izba_2", "baba_yaga", "izba_3"],
});

costume.push({
  name: "Light Angels",
  imgs: ["lightAngels3", "light_angels_heart", "light_angels_1", "lightAngels2", "light_angels_5"],
});

costume.push({
  name: "Riders",
  imgs: ["cowboy_2", "ukr_man_3", "cowboy_1", "riders"],
});

costume.push({
  name: "Angels",
  imgs: ["angel_blue_white", "angel_silver", "angel_black_red", "angel_violet"],
});

costume.push({
  name: "Butterflies",
  imgs: ["bflies_3", "bflies_1", "bflies_5", "bflies_4", "bfly_green"],
});

costume.push({
  name: "№1, №2, №3",
  imgs: ["number_1", "number_2", "number_3", "number_1_and_2"],
});

costume.push({
  name: "Ukrainians",
  imgs: [
    "ukrainians",
    "ukr_man_3",
    "ukrman2",
    "ukr_woman_1",
    "ukr_woman_2",
    "ukr_woman_4",
    "ukr_woman_3",
    "ukr_light",
    "ukr_women",
    "ukr_man_1",
  ],
});

costume.push({
  name: "Clowns",
  imgs: ["clown_pink", "clowns_5", "clowns_6", "clown_yellow"],
});

costume.push({
  name: "Avatars",
  imgs: ["avatar_1", "avatar_5", "avatar_2", "Avatar3"],
});

costume.push({
  name: "Angel, Sun, Moon",
  imgs: ["angelok", "sun", "moon"],
});

costume.push({
  name: "Shopping ladies",
  imgs: ["shopping_4", "shopping_6", "shopping_2", "shopping_5", "shopping_3"],
});

costume.push({
  name: "Can Can",
  imgs: ["cancan", "Cancan2", "cancan_3"],
});

costume.push({
  name: "Ladies",
  imgs: ["dama_violet", "dama_pink", "dama_green", "dama_red"],
});

costume.push({
  name: "Gentlemen",
  imgs: ["gentleman_1", "mushketeer_2", "mushketeer_1"],
});

costume.push({
  name: "Sailors",
  imgs: ["sailor_1", "sailor_2", "sailor_3", "sailor_4"],
});

costume.push({
  name: "Euro-2012",
  imgs: ["euro_england", "euro", "euro_spain"],
});

costume.push({
  name: "Spanish costumes",
  imgs: ["spanish_woman_2", "spanish_man", "spanish_woman_1", "spanish_all"],
});

costume.push({
  name: "Russians",
  imgs: ["russian_red", "russians_all", "russian_white"],
});

costume.push({
  name: "Orient costumes",
  imgs: ["india_violet", "india", "india_red", "hottab", "orient_princess"],
});

costume.push({
  name: "Chinese costumes",
  imgs: ["china_dragon", "china_pink", "china_white", "china_grey"],
});

costume.push({
  name: "New Year and Christmas costumes",
  imgs: ["NewMoroz", "moroz_snigurka_2", "new_moroz_2", "santa", "angelok", "jalynka", "birds_1", "moroz_snigurka"],
});

costume.push({
  name: "Halloween",
  imgs: ["pumpkin_4", "black_lady", "baba_yaga", "koko_1", "gorynych", "pumpkin_4", "vamp_king_1", "izba_1"],
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
