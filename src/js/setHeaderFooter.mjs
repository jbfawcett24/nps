import {parkInfoTemplate, footerTemplate} from "./templates.mjs";
import enableNavigation from "./navigation.mjs"

function setHeaderInfo(info)
{
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.textContent = info.fullName;
    disclaimer.href = info.url;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(info);
    document.querySelector(".hero-banner > img").src = info.images[0].url;
    document.title = info.fullName;
}
function setFooter(info)
{
    document.querySelector("footer").innerHTML = footerTemplate(info);
}

export function setHeaderFooter(info)
{
    setHeaderInfo(info);
    setFooter(info);
    enableNavigation();
}