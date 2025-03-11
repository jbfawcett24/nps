import spritePath from '../images/sprite.symbol.svg';
export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}
export function mediaCardTemplate(info) {
    return `<div class = "card"><p><a href="${info.link}"><img src="${info.image}" alt="picture of the park"></a></p>
    <h2><a href="${info.link}">${info.name}</a></h2>
    <p>${info.description}</p></div>`
}
export function footerTemplate(info) {
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
function getMailingAddress(addresses){
    return addresses.find((address) => address.type === "Mailing");
}
function getVoicePhone(numbers)
{
    const number = numbers.find((number) => number.type === "Voice")
    return number.phoneNumber;
}

export function alertTemplate(alert) {
    let alertType = "";
    // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}
 export function visitorTemplate(visitorCenter)
 {
     return `<li><h2>${visitorCenter.name}</h2>
    <p>${visitorCenter.description}</p>
<p>${visitorCenter.directionsInfo}</p></li>`;
 }