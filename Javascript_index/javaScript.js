// let charactersUrl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=76d2d2176bb78cc60357785902cf456a&hash=757a2bbba72be13027f0244def5872a3'
import Api from "./api.js";
const Data = new Api();

async function initApp() {
  try {
    const getDataC = await Data.getDataCharacter();
    const getDataL = await Data.getDataLocation();
    const getDataE = await Data.getDataEpisode();
    console.log(getDataC)


    var f = getDataC.results.map(function (dataMap) {
      let h;
      h = `
        <div class="card-beach">
    <img
      src="${`${dataMap.image}`}"
      alt=""
      class="card-image-beach"
    />
    <h3 class="card-title" onclick="myFunction('${dataMap.name}', '${dataMap.origin.name}')">${dataMap.name}</h3>
  </div>
</div>
        `;

      return h;
    });

    document.querySelector(".items").innerHTML = `${f.join("")}`;

    // document.getElementById("numero").innerHTML = `${f.join("")}`;
  } catch (e) {}
}
// let cards = document.getElementById('cards')
// console.log( await initApp());

initApp();
