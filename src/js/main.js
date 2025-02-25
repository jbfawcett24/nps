import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.textContent = parkData.fullName;
disclaimer.href = parkData.url;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
document.querySelector(".hero-banner > img").src = parkData.images[0].url;
document.title = parkData.fullName;