import {getParkData} from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description:
            "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];
function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}
function mediaCardTemplate(info) {
    return `<p><a href="${info.link}"><img src="${info.image}" alt="picture of the park"></a></p>
    <h2><a href="${info.link}">${info.name}</a></h2>
    <p>${info.description}</p>`
}
function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);
    return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
</section>`;
}
function setHeaderInfo()
{
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.textContent = parkData.fullName;
    disclaimer.href = parkData.url;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
    document.querySelector(".hero-banner > img").src = parkData.images[0].url;
    document.title = parkData.fullName;
}
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
function setFooter()
{
    document.querySelector("footer").innerHTML = footerTemplate(parkData);
}
function getMailingAddress(addresses){
    return addresses.find((address) => address.type === "Mailing");
}
function getVoicePhone(numbers)
{
    const number = numbers.find((number) => number.type === "Voice")
    return number.phoneNumber;
}
setHeaderInfo();
setIntro();
setMediaCards();
setFooter();
