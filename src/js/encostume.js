"use strict";

let pathImg = "./src/img/";

let mobile = document.querySelector("#mobile");
let selectCostume = document.createElement("select");

let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");

openMenu &&
  openMenu.addEventListener("click", () => {
    let select = document.querySelector("select");
    select.classList.add("z-index-10");
  });

closeMenu &&
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
  name: "Chess",
  imgs: ["chess_1", "chess_2", "chess_3", "chess_4"],
  video: ["https://www.youtube.com/embed/BVR_RI-ddiA?rel=0&showinfo=0"],
});

costume.push({
  name: "Venetian carnival costumes",
  imgs: ["bauto", "arlekolomb", "goldvenice", "kolombina", "arlekin"],
});

costume.push({
  name: "Rio de Janeiro carnival costumes",
  imgs: ["samba_red", "samba_2", "samba_orange"],
});

costume.push({
  name: "Robots Transformers ALX-16 and ALX-17",
  imgs: ["robot_1", "robots_4", "robots_5", "robot_2", "robot_3"],
  video: ["https://www.youtube.com/embed/BVR_RI-ddiA?rel=0&showinfo=0"],
});

costume.push({
  name: "Gods of Egypt",
  imgs: ["egypt_gods_1", "egypt_2", "egypt_3", "egypt_1"],
});

costume.push({
  name: "Buffons",
  imgs: [
    "joker_3",
    "jokers",
    "joker_1",
    "skomoroh_6",
    "skomoroh_5",
    "jokers_2",
    "joker_2",
  ],
});

costume.push({
  name: "White Birds",
  imgs: ["bird_2", "bird_4", "birds_1"],
});

costume.push({
  name:
    "Three-heads Dragon Zmey Gorynych, flying Baba Yaga and Hut on hen's legs",
  imgs: ["gorynych", "izba_1", "izba_2", "baba_yaga", "izba_3"],
});

costume.push({
  name: "Light Angels",
  imgs: [
    "light_angels_3",
    "light_angels_heart",
    "light_angels_1",
    "light_angels_2",
    "light_angels_5",
  ],
});

costume.push({
  name: "Riders",
  imgs: ["cowboy_2", "ukr_man_3", "riders"],
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
    "ukrmany",
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
  imgs: ["avatar_1", "avatar_5", "avatar_2", "avatar_3"],
});

costume.push({
  name: "Angel, Sun, Moon",
  imgs: ["angelok", "sun", "moon"],
});

costume.push({
  name: "Shopping ladies",
  imgs: ["shopping_4", "shopping_5", "shopping_3", "shopping_6", "shopping_2"],
});

costume.push({
  name: "Can Can",
  imgs: ["cancan", "cancan_2", "cancan_3"],
});

costume.push({
  name: "Ladies",
  imgs: ["dama_violet", "dama_pink", "dama_green", "dama_red", "dama_blue"],
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
  imgs: ["euro_england", "euro_spain", "euro"],
});

costume.push({
  name: "Spanish costumes",
  imgs: ["spanish_woman_2", "spanish_man", "spanish_all", "spanish_woman_1"],
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
  imgs: [
    "new_moroz",
    "moroz_snigurka_2",
    "new_moroz_2",
    "santa",
    "angelok",
    "jalynka",
    "birds_1",
    "moroz_snigurka",
  ],
});

costume.push({
  name: "Halloween",
  imgs: [
    "pumpkin_4",
    "black_lady",
    "baba_yaga",
    "koko_1",
    "gorynych",
    "pumpkin_2",
    "vamp_king_1",
    "izba_1",
  ],
});

let costumeDesktop = document.querySelector("#costumeDesktop");
let costumeDesktop2 = document.querySelector("#costumeDesktop2");
let place = costumeDesktop;

window.onresize = function () {
  if (document.body.clientWidth >= 978) {
    showDesktopCostume();
  } else {
    this.showMobileCostume();
  }
};

if (document.body.clientWidth >= 978) {
  showDesktopCostume();
} else {
  showMobileCostume();
}

function showMobileCostume() {
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
      picture.innerHTML = `<source type="image/webp" srcset="./src/img/webp-600/${obj.imgs[i]}_600.webp">
      <img src="./src/img/jpg-350/${obj.imgs[i]}_350.jpg" class="img-fluid" />
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

    if (obj.video)
      mobile.innerHTML += `
         <div class="text-center w-100"> 
           <iframe class="mobile__youtube" src="${obj.video[0]}" > </iframe>
         </div>
    `;
  }
}

function showDesktopCostume() {
  for (let i = 0; i < costume.length; i++) {
    let row = document.createElement("div");
    place = i > 1 ? costumeDesktop2 : costumeDesktop;
    row.className =
      i > 1
        ? "row d-flex justify-content-around text-center mb-5"
        : "row d-flex justify-content-around text-center mb-5";

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

      if (costume[i].video) {
        row.innerHTML += `
        <div>
              <iframe class="main__video" src="${costume[i].video[0]}" > </iframe>
         </div>
        `;
      }
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
      if (costume[i].video) {
        row.innerHTML += `
        <div>
              <iframe class="main__video" src="${costume[i].video[0]}" > </iframe>
         </div>
        `;
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
    if (costume[i].video) {
      row.innerHTML += `
      <div>
            <iframe class="main__video" src="${costume[i].video[0]}" > </iframe>
       </div>
      `;
    }

    row.append(div7);

    place.append(row);
  }
}
