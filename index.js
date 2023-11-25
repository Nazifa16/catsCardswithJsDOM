const catsInfo = [
  {
    breed: "American Shorthair",
    img: "./images/american.png",
    playfulness: "85%",
    "friendliness to children": "80%",
    "need for attention": "60%",
  },
  {
    breed: "Ragamuffin",
    img: "./images/Ragamuffin.jpeg",
    playfulness: "60%",
    "friendliness to children": "80%",
    "need for attention": "40%",
  },
  {
    breed: "Scottish Fold",
    img: "./images/Scottish Fold.jpeg",
    playfulness: "80%",
    "friendliness to children": "60%",
    "need for attention": "65%",
  },
  {
    breed: "Tuxedo",
    img: "./images/depositphotos_398738692-stock-photo-black-white-house-cat-white.jpg",
    playfulness: "100%",
    "friendliness to children": "65%",
    "need for attention": "60%",
  },
  {
    breed: "York Chocolate",
    img: "./images/york_482x260.webp",
    playfulness: "88%",
    "friendliness to children": "100%",
    "need for attention": "85%",
  },

  {
    breed: "Turkish Angora",
    img: "./images/bp-lot-8-turkish-angora-couleur-portrait.png",
    playfulness: "80%",
    "friendliness to children": "55%",
    "need for attention": "80%",
  },
];

const aboutCats = catsInfo
  .map((item) => {
    return `
  <div class="card" style="width: 18rem">
        <img
          class="card-img-top border border-dark""
          src="${item.img}"
          alt="Card image cap"
          class="img-fluid" style="max-width: 100%; height: 50%;" 
        />
        <div class="card-body border border-info">
          <h5 class="card-title">${item.breed}</h5>
          <p class="card-text">
          playfulness: ${item.playfulness}
          </p>
          <p class="card-text">
          friendliness to children: ${item["friendliness to children"]}
          </p>
          <p class="card-text ">
          need for attention: ${item["need for attention"]}
          </p>
        </div>
      </div>
    </div>`;
  })
  .join("");
console.log(aboutCats);
const catInfo = document.querySelector("#catInfo");
catInfo.innerHTML = aboutCats;
