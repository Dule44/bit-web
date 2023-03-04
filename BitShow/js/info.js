import search from './search.js';

// handlers for page

let showId = localStorage.getItem("id");
let showTitle = $("#showTitle");
let showInfo = $("#showInfo");
let showImg = $("#showImg");
let showList = $("#showList");
let numberSeason = $("#numberSeason");
let showCast = $("#showCast");
let showCrew = $("#showCrew");
let showAka = $("#showAka");

// display TVshow image and summary

function displayShow() {
  fetch(`http://api.tvmaze.com/shows/${showId}`)
    .then((response) => response.json())
    .then((response) => {
    showTitle.append(
      `<p>${response.name} \u00A0\ ${response.rating.average} <span id="boot-icon" class="bi bi-star-fill"></span></p>`
    );
    showImg.append(
      `<img src='${response.image.original}' class='img-fluid' alt='show'>`
    );
    showInfo.append(response.summary);
  });
}

// display shows season

function displayList() {
  fetch(`http://api.tvmaze.com/shows/${showId}/seasons`)
    .then((response) => response.json())
    .then((response) => {
    numberSeason.text(`Seassons (${response.length})`);

    function dateFormat(date) {
      let dateFormat = new Date(date);
      return `${dateFormat.getDate()}.${dateFormat.getMonth() + 1}.${dateFormat.getFullYear()}`;
    }

    response.forEach((el) => {
      if (el.premiereDate !== null && el.endDate !== null) {
        showList.append(
          `<li>${dateFormat(el.premiereDate)} - ${dateFormat(el.endDate)}</li>`
        );
      } else {
        showList.append(`<li>To be determined</li>`);
      }
    });
  });
}

// display show cast

function displayCast() {
  fetch(`http://api.tvmaze.com/shows/${showId}/cast`)
    .then((response) => response.json())
    .then((response) => {
    let counter = 0;
    response.forEach((el) => {
      if (counter < 12) {
        showCast.append(`<li>${el.person.name}</li>`);
      }
      counter++;
    });
  });
}

// display show crew

function displayCrew() {
  fetch(`http://api.tvmaze.com/shows/${showId}/crew`)
    .then((response) => response.json())
    .then((response) => {
    let counter = 0;
    response.forEach((el) => {
      if (counter < 10) {
        showCrew.append(
          `<li> Crew position: ${el.type} - ${el.person.name}</li>`
        );
      }

      counter++;
    });
  });
}

// display show aka's

function displayAka() {
  fetch(`http://api.tvmaze.com/shows/${showId}/akas`)
    .then((response) => response.json())
    .then((response) => {
    response.forEach((el) => {
      let aka = el.country.name + ": " + el.name + "<br>";
      showAka.append(`<li>${aka}</li>`);
    });
  });
}

// execute

displayShow();
displayList();
displayCast();
displayCrew();
displayAka();
search();
