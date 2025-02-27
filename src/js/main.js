import {getParkData, getParkInfoLinks} from "./parkService.mjs";
import {mediaCardTemplate} from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();
function setIntro()
{
    const section = document.querySelector(".intro");
    section.innerHTML = 
        `<h1>${parkData.fullName}</h1>
        <p>${parkData.description}</p>`;
}
function setMediaCards(){
    const html = parkInfoLinks.map(mediaCardTemplate);
    document.querySelector(".info").innerHTML = html.join("");
}
setHeaderFooter(parkData);
setIntro();
setMediaCards();

