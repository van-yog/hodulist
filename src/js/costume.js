"use strict";

let pathImg = "./src/img/";

let mobile = document.querySelector("#mobile");

let costume = [];

costume.push({
  name: "Масляна",
  imgs: ["jokers", "impBlack", "gopak4", "ukrainians", "jokers2"],
  alts: [],
});

costume.push({
  name: "Венеціанські костюми",
  imgs: ["kolombina", "arlekin", "goldvenice", "bauto", "arlekolomb"],
  alts: [],
});

costume.push({
  name: "Карнавал Ріо-де-Жанейро",
  imgs: ["sambaRed", "samba2", "sambaOrange"],
  alts: [],
});

costume.push({
  name: "Роботи Трансформери ALX-16 та ALX-17",
  imgs: ["robot1", "robot3", "robots5", "robot2", "robots4"],
  alts: [],
});

costume.push({
  name: "Шахи",
  imgs: ["chess1", "chess2", "chess3", "chess4"],
  alts: [],
});

costume.push({
  name: "Боги Єгипта",
  imgs: ["egyptgods1", "Egypt2", "egypt3", "egypt1"],
  alts: [],
});

costume.push({
  name: "Джокери і Скоморохи",
  imgs: ["jokers", "joker1", "Skomoroh5", "joker2", "Skomoroh6", "jokers2", "joker3"],
  alts: [],
});

costume.push({
  name: "Білі Птахи",
  imgs: ["bird2", "bird4", "birds1"],
  alts: [],
});

costume.push({
  name: "Змій Горинич, Баба Яга в ступі та Ізбушка на курячих ніжках",
  imgs: ["gorynych", "izba1", "izba2", "babayaga", "izba3"],
  alts: [],
});

costume.push({
  name: "Світлі Ангели",
  imgs: ["lightAngels3", "lightangelsheart", "lightAngels1", "lightAngels2", "lightangels5"],
  alts: [],
});

costume.push({
  name: "Вершники",
  imgs: ["cowboy2", "ukrman3", "cowboy1", "riders"],
  alts: [],
});

costume.push({
  name: "Крилаті Ангели",
  imgs: ["angelBlueWhite", "angelSilver", "angelBlackRed", "angelViolet"],
  alts: [],
});

costume.push({
  name: "Метелики",
  imgs: ["bflies3", "bflies1", "bflies5", "bflies4", "bflyGreen"],
  alts: [],
});

costume.push({
  name: "№1, №2, №3",
  imgs: ["number1", "number2", "number3", "number1and2"],
  alts: [],
});

costume.push({
  name: "Українці",
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
  alts: [],
});

costume.push({
  name: "Клоуни",
  imgs: ["clownPink", "clowns5", "clowns6", "clownYellow"],
  alts: [],
});

costume.push({
  name: "Аватари",
  imgs: ["Avatar1", "avatar5", "Avatar2", "Avatar3"],
  alts: [],
});

costume.push({
  name: "Янголятко, Сонце, Місяць",
  imgs: ["angelok", "sun", "moon"],
  alts: [],
});

costume.push({
  name: "Шопінг леді",
  imgs: ["shopping4", "shopping6", "shopping2", "shopping5", "shopping3"],
  alts: [],
});

costume.push({
  name: "Кан Кан",
  imgs: ["cancan", "Cancan2", "cancan3"],
  alts: [],
});

costume.push({
  name: "Дами",
  imgs: ["damaViolet", "damaPink", "damaGreen", "damaRed"],
  alts: [],
});

costume.push({
  name: "Кавалери",
  imgs: ["gentleman1", "mushketeer2", "mushketeer1"],
  alts: [],
});

costume.push({
  name: "Моряки",
  imgs: ["sailor1", "sailor2", "sailor3", "sailor4"],
  alts: [],
});

costume.push({
  name: "Євро-2012",
  imgs: ["euroEngland", "euro", "euroSpain"],
  alts: [],
});

costume.push({
  name: "Іспанці",
  imgs: ["spanishWoman2", "spanishMan", "spanishWoman1", "spanishAll"],
  alts: [],
});

costume.push({
  name: "Східні костюми",
  imgs: ["indiaViolet", "india", "indiaRed", "hottab", "orientprincess"],
  alts: [],
});

costume.push({
  name: "Китайські костюми",
  imgs: ["chinaDragon", "chinaPink", "chinaWhite", "chinaGrey"],
  alts: [],
});

costume.push({
  name: "Новорічні костюми",
  imgs: ["NewMoroz", "MorozSnigurka2SM", "NewMoroz2", "santa", "angelok", "jalynka", "birds1"],
  alts: [],
});

costume.push({
  name: "Хелловін",
  imgs: ["pumpkin4", "BlackLady", "babayaga", "koko1", "gorynych", "pumpkin4", "VampKing1", "izba1"],
  alts: [],
});

for (let i = 0; i < costume.length; i++) {
  createSlider(costume[i], i);
}

createSelect(costume);

function createSelect(costume) {
  let select = document.createElement("select");

  costume.forEach((element) => {
    let option = document.createElement("option");
    option.innerText = element.name;
    select.append(option);
  });
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
  div.classList.add("col-10", "offset-1", "mb-5", "main", "text-center");
  let div1 = document.createElement("div");

  div1.classList.add("carousel", "slide");
  div1.setAttribute("id", costumeId);
  div1.setAttribute("data-ride", "carousel");
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
