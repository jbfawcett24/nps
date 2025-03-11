import {getParkData, getParkInfoLinks, getInfoLinks} from "./parkService.mjs";
import {mediaCardTemplate} from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";
import "../css/home.css";
import "../css/style.css";

function setIntro(parkData)
{
    const section = document.querySelector(".intro");
    section.innerHTML = 
        `<h1>${parkData.fullName}</h1>
        <p>${parkData.description}</p>`;
}
function setMediaCards(parkInfoLinks){
    const html = parkInfoLinks.map(mediaCardTemplate);
    document.querySelector(".info").innerHTML = html.join("");
}

async function init()
{
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setIntro(parkData);
    setMediaCards(links);
}

init();


