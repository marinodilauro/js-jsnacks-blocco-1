// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

const nameList = [
  "marino",
  "jimmy",
  "andrea",
  "simona",
  "chiara",
  "piera",
  "lello"
];

const inputNameElement = document.getElementById("inputName");

const helpLinkElement = document.getElementById("help");

helpLinkElement.addEventListener("click", function (e) {

  e.preventDefault();

  helpLinkElement.insertAdjacentHTML("afterend",
    `<div class="rounded" id="help_banner">
      Prova questo nome: ${nameList[Math.floor(Math.random() * (nameList.length - 1))]}
    </div>`
  );

});


let hasAccess = false;

const formElement = document.querySelector(".mc_name_form");


formElement.addEventListener("submit", function (e) {

  e.preventDefault();

  userName = inputNameElement.value;

  console.log(userName);


  for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i];

    if (userName === name) {
      hasAccess = true;
    }

  };


  const outputElement = document.querySelector(".output");

  if (hasAccess === true) {

    outputElement.innerHTML = `<div>Ciao ${userName.split("@")[0]}, benvenuto</div>`;

  } else {

    outputElement.innerHTML = `<div>Spiacente ${userName.split("@")[0]}, il tuo nome non è presente in archivio!</div>`;

  };

  const helpBannerElement = document.getElementById("help_banner");
  helpBannerElement.remove();

  hasAccess = false;

});


