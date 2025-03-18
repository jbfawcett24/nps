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
document.querySelector("#global-nav-toggle").addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if ev.target is the button or something inside the button
    if (target.tagName !== "BUTTON") {
        target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
        // if we opened it then set the aria-expanded attribute to true
        target.setAttribute("aria-expanded", true);
    } else {
        // if we closed it then set the aria-expanded attribute to false
        target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
});

init();


