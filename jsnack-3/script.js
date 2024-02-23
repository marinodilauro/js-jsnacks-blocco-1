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

let userName = inputNameElement.value;
console.log(userName);

const helpLinkElement = document.getElementById("help");


helpLinkElement.addEventListener("click", function (e) {

  e.preventDefault();

  helpLinkElement.insertAdjacentHTML("afterend",
    `<div class="rounded mc_help">
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


  const inputNameElement = document.querySelector(".mc_name_output");

  if (hasAccess === true) {

    inputNameElement.innerHTML = `<div class="mc_access_granted">Ciao ${userName.split("@")[0]}, benvenuto</div>`;

  } else {

    inputNameElement.innerHTML = `<div class="mc_access_denied">Spiacente ${userName.split("@")[0]}, il tuo nome non è presente in archivio!</div>`;

  };

  const helpBannerElement = document.querySelector(".mc_help");
  helpBannerElement.remove();

  hasAccess = false;

});


