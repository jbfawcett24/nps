import { getParkData, getAlerts, getVisitorData} from "./parkService.mjs";
import {alertTemplate, visitorTemplate} from "./templates.mjs";
import {setHeaderFooter}from "./setHeaderFooter.mjs";
import "../css//style.css";
import "../css/conditions.css";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}
function setVisitorCenter(centers)
{
    const centerSection = document.querySelector(".visitor ul");
    centerSection.innerHTML = "";
    const html = centers.map(visitorTemplate);
    centerSection.insertAdjacentHTML("beforeend", html.join(""));
}
function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    activitiesContainer.innerHTML = "";
    const html = activities.map((activity) => {
        return `<li><p>${activity}</p></li>`;
    });
    console.log(html);
    activitiesContainer.innerHTML = html.join("");
}
async function init() {
    const parkData = await getParkData();
    //console.log(parkData.activities);
    const alerts = await getAlerts(parkData.parkCode);
    const centers = await getVisitorData();
    const activities = parkData.activities.map((activity) => {return activity.name;});
    console.log(activities);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenter(centers);
    setActivities(activities);
}

init();