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

// function firstCostume ("Масляна");

let costume = [];

costume.push({
  name: "Масляна",
  imgs: ["jokers", "gopak_4", "imp_black", "ukrainians", "jokers_2"],
  alts: [],
});

costume.push({
  name: "Венеціанські костюми",
  imgs: ["bauto", "arlekolomb", "goldvenice", "kolombina", "arlekin"],
  alts: [],
});

costume.push({
  name: "Карнавал Ріо-де-Жанейро",
  imgs: ["samba_red", "samba_2", "samba_orange"],
  alts: [],
});

costume.push({
  name: "Роботи Трансформери ALX-16 та ALX-17",
  imgs: ["robot_1", "robots_4", "robots_5", "robot_2", "robot_3"],
  alts: [],
});

costume.push({
  name: "Шахи",
  imgs: ["chess_1", "chess_2", "chess_3", "chess_4"],
  alts: [],
});

costume.push({
  name: "Боги Єгипта",
  imgs: ["egypt_gods_1", "egypt_2", "egypt_3", "egypt_1"],
  alts: [],
});

costume.push({
  name: "Джокери і Скоморохи",
  imgs: ["joker_3", "jokers", "joker_1", "skomoroh_6", "skomoroh_5", "jokers_2", "joker_2"],
  alts: [],
});

costume.push({
  name: "Білі Птахи",
  imgs: ["bird_2", "bird_4", "birds_1"],
  alts: [],
});

costume.push({
  name: "Змій Горинич, Баба Яга в ступі та Ізбушка на курячих ніжках",
  imgs: ["gorynych", "izba_1", "izba_2", "baba_yaga", "izba_3"],
  alts: [],
});

costume.push({
  name: "Світлі Ангели",
  imgs: ["light_angels_3", "light_angels_heart", "light_angels_1", "light_angels_2", "light_angels_5"],
  alts: [],
});

costume.push({
  name: "Вершники",
  imgs: ["cowboy_2", "ukr_man_3", "riders"],
  alts: [],
});

costume.push({
  name: "Крилаті Ангели",
  imgs: ["angel_blue_white", "angel_silver", "angel_black_red", "angel_violet"],
  alts: [],
});

costume.push({
  name: "Метелики",
  imgs: ["bflies_3", "bflies_1", "bflies_5", "bflies_4", "bfly_green"],
  alts: [],
});

costume.push({
  name: "№1, №2, №3",
  imgs: ["number_1", "number_2", "number_3", "number_1_and_2"],
  alts: [],
});

costume.push({
  name: "Українці",
  imgs: [
    "ukrainians",
    "ukr_man_3",
    "ukrmany",
    "ukr_woman_1",
    "ukr_woman_2",
    "ukr_woman_4",
    "ukr_woman_3",
    "ukr_light",
    "ukr_women",
    "ukr_man_1",
  ],
  alts: [],
});

costume.push({
  name: "Клоуни",
  imgs: ["clown_pink", "clowns_5", "clowns_6", "clown_yellow"],
  alts: [],
});

costume.push({
  name: "Аватари",
  imgs: ["avatar_1", "avatar_5", "avatar_2", "avatar_3"],
  alts: [],
});

costume.push({
  name: "Янголятко, Сонце, Місяць",
  imgs: ["angelok", "sun", "moon"],
  alts: [],
});

costume.push({
  name: "Шопінг леді",
  imgs: ["shopping_4", "shopping_5", "shopping_3", "shopping_6", "shopping_2"],
  alts: [],
});

costume.push({
  name: "Кан Кан",
  imgs: ["cancan", "cancan_2", "cancan_3"],
  alts: [],
});

costume.push({
  name: "Дами",
  imgs: ["dama_violet", "dama_pink", "dama_green", "dama_red", "dama_blue"],
  alts: [],
});

costume.push({
  name: "Кавалери",
  imgs: ["gentleman_1", "mushketeer_2", "mushketeer_1"],
  alts: [],
});

costume.push({
  name: "Моряки",
  imgs: ["sailor_1", "sailor_2", "sailor_3", "sailor_4"],
  alts: [],
});

costume.push({
  name: "Євро-2012",
  imgs: ["euro_england", "euro_spain", "euro"],
  alts: [],
});

costume.push({
  name: "Іспанці",
  imgs: ["spanish_woman_2", "spanish_man", "spanish_all", "spanish_woman_1"],
  alts: [],
});

costume.push({
  name: "Східні костюми",
  imgs: ["india_violet", "india", "india_red", "hottab", "orient_princess"],
  alts: [],
});

costume.push({
  name: "Китайські костюми",
  imgs: ["china_dragon", "china_pink", "china_white", "china_grey"],
  alts: [],
});

costume.push({
  name: "Новорічні костюми",
  imgs: ["new_moroz", "moroz_snigurka_2", "new_moroz_2", "santa", "angelok", "jalynka", "birds_1", "moroz_snigurka"],
  alts: [],
});

costume.push({
  name: "Хелловін",
  imgs: ["pumpkin_4", "black_lady", "baba_yaga", "koko_1", "gorynych", "pumpkin_2", "vamp_king_1", "izba_1"],
  alts: [],
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
  select.classList.add(
    "offset-3",
    "offset-md-2",
    "col-8",
    "position-fixed",
    "p-2",
    "rounded",
    "bg-light",
    "select-costume",
    "my-2"
  );

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

  let h3 = document.createElement("h4");
  h3.className = "w-100 px-3 text-center text-white mb-3 pt-5";
  h3.innerText = obj.name;
  h3.setAttribute("id", `costume${id}`);

  let div = document.createElement("div");
  div.className = "swiper-container";

  let div1 = document.createElement("div");
  div1.className = "swiper-wrapper";

  for (let i = 0; i < obj.imgs.length; i++) {
    let slide = document.createElement("div");
    slide.className = "swiper-slide";

    let picture = document.createElement("picture");
    picture.innerHTML = `<source type="image/webp" srcset="./src/img/webp/${obj.imgs[i]}.webp">
    <img src="./src/img/${obj.imgs[i]}.jpg" class="img-fluid" />
    </source>`;

    slide.append(picture);
    div1.append(slide);
  }

  let pagination = document.createElement("div");
  pagination.className = "swiper-pagination swiper-white";

  let arrowNext = document.createElement("div");
  arrowNext.className = "swiper-button-next btn-color";

  let arrowPrev = document.createElement("div");
  arrowPrev.className = "swiper-button-prev btn-color";

  div.append(div1);
  div.append(pagination);
  div.append(arrowNext);
  div.append(arrowPrev);

  mobile.append(h3);
  mobile.append(div);
}

let costumeDesktop = document.querySelector("#costumeDesktop");
let costumeDesktop2 = document.querySelector("#costumeDesktop2");
let place = costumeDesktop;

for (let i = 0; i < costume.length; i++) {
  let row = document.createElement("div");
  place = i > 1 ? costumeDesktop2 : costumeDesktop;
  row.className =
    i > 1 ? "row d-flex justify-content-around text-center mb-5" : "row d-flex justify-content-around text-center mb-5";

  let h2 = document.createElement("h2");
  h2.innerText = costume[i].name;
  h2.classList.add("text-center", "main__header", "mb-3");
  place.append(h2);

  if (costume[i].imgs.length === 5) {
    row.innerHTML = `
    <div class="col-3 my-auto">
      <a href="./src/img/${costume[i].imgs[0]}.jpg">
       <img src="./src/img/desktop/${costume[i].imgs[0]}.jpg" class="img-costume" />
      </a>
    </div>
    <div class="col-6">
      <div class="d-flex justify-content-around">
        <a href="./src/img/${costume[i].imgs[1]}.jpg"> 
          <img src="./src/img/desktop/${costume[i].imgs[1]}.jpg" class="img-costume" />
        </a>
        <a href="./src/img/${costume[i].imgs[2]}.jpg">
          <img src="./src/img/desktop/${costume[i].imgs[2]}.jpg" class="img-costume" />
        </a>
      </div>
      <a href="./src/img/${costume[i].imgs[4]}.jpg">
       <img src="./src/img/desktop/${costume[i].imgs[4]}.jpg" class="img-costume" />
      </a>
    </div>
    <div class="col-3 my-auto">
      <a href="./src/img/${costume[i].imgs[3]}.jpg">
      <img src="./src/img/desktop/${costume[i].imgs[3]}.jpg" class="img-costume" />
      </a>
    </div>`;

    place.append(row);
    continue;
  }

  if (costume[i].imgs.length >= 8) {
    // create left
    row.innerHTML = `
    <div class="col-3 my-auto">
      <a href="./src/img/${costume[i].imgs[0]}.jpg">
       <img src="./src/img/desktop/${costume[i].imgs[0]}.jpg" class="img-costume" />
      </a>
    </div>
    <div class="col-6">
      <div class="d-flex justify-content-around">
        <a href="./src/img/${costume[i].imgs[1]}.jpg"> 
          <img src="./src/img/desktop/${costume[i].imgs[1]}.jpg" class="img-costume" />
        </a>
        <a href="./src/img/${costume[i].imgs[2]}.jpg">
          <img src="./src/img/desktop/${costume[i].imgs[2]}.jpg" class="img-costume" />
        </a>
      </div>
      <a href="./src/img/${costume[i].imgs[4]}.jpg">
       <img src="./src/img/desktop/${costume[i].imgs[4]}.jpg" class="img-costume" />
      </a>
    </div>
    <div class="col-3 my-auto">
      <a href="./src/img/${costume[i].imgs[3]}.jpg">
      <img src="./src/img/desktop/${costume[i].imgs[3]}.jpg" class="img-costume" />
      </a>
    </div>`;

    for (let k = 5; k < costume[i].imgs.length; k++) {
      let name = costume[i].imgs[k];

      let a = document.createElement("a");
      a.className = "my-auto";
      a.innerHTML = `
      <a href="./src/img/${name}.jpg">
        <img class="img-costume" src="./src/img/desktop/${name}.jpg" />
      </a>
      `;

      row.append(a);
    }
    place.append(row);
    continue;
  }

  let div7 = document.createElement("div");
  div7.className = "w-100 d-flex justify-content-around";

  for (let k = 0; k < costume[i].imgs.length; k++) {
    let name = costume[i].imgs[k];

    let a = document.createElement("a");
    a.className = "my-auto";
    a.innerHTML = `
    <a href="./src/img/${name}.jpg">
      <img class="img-costume" src="./src/img/desktop/${name}.jpg" />
    </a>`;

    if (costume[i].imgs.length === 7 && k >= 4) {
      div7.append(a);
      continue;
    }

    row.append(a);
  }
  row.append(div7);

  place.append(row);
}
