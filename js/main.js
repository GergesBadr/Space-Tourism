// Toggle menu
const navLinksDiv = document.getElementById("nav-links"),
  iconHamburger = document.getElementById("icon-hamburger"),
  iconClose = document.getElementById("icon-close");

iconHamburger.addEventListener("click", showMenu);
iconClose.addEventListener("click", hideMenu);

function showMenu() {
  navLinksDiv.classList.remove("hidden");
  iconHamburger.classList.add("hidden");
  iconClose.classList.remove("hidden");
}
function hideMenu() {
  navLinksDiv.classList.add("hidden");
  iconClose.classList.add("hidden");
  iconHamburger.classList.remove("hidden");
}

// pages-counter dynamically
let pagesCounter = Array.from(document.querySelectorAll(".pages-counter"));
pagesCounter.forEach((page, index) => {
  page.innerText = `0${index}`;
});

// Load distenation content from json file
async function fetchDataFromJsonFile() {
  const res = await fetch("./js/data.json");
  const data = await res.json();
  return data;
}

const desBtns = document.querySelectorAll(".des-btn"),
  desImg = document.getElementById("des-img"),
  desName = document.getElementById("des-name"),
  desDescription = document.getElementById("des-description"),
  desDistance = document.getElementById("des-distance"),
  desTravelTime = document.getElementById("des-travel-time");

desBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    desBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    // fetch data from json file
    fetchDataFromJsonFile().then((data) => {
      const clickedBtnIndex = Array.from(desBtns).indexOf(e.target);
      updateDesData(data.destinations[clickedBtnIndex]);
    });
  });
});

function updateDesData(destination) {
  desImg.src = destination.images.png;
  desImg.alt = destination.images.alt;
  desName.innerText = destination.name;
  desDescription.innerText = destination.description;
  desDistance.innerText = destination.distance;
  desTravelTime.innerText = destination.travel;
}

// Load crew content from json file
const crewDots = document.querySelectorAll(".crew-dot"),
  crewImg = document.getElementById("crew-img"),
  crewRole = document.getElementById("crew-role"),
  crewName = document.getElementById("crew-name"),
  crewBio = document.getElementById("crew-bio");

crewDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    crewDots.forEach((dot) => {
      dot.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    // fetch data from json file
    fetchDataFromJsonFile().then((data) => {
      const clickedCrewMember = Array.from(crewDots).indexOf(e.target);
      updateCrewData(data.crew[clickedCrewMember]);
    });
  });
});

function updateCrewData(crewMember) {
  crewImg.src = crewMember.images.png;
  crewImg.alt = crewMember.images.alt;
  crewRole.innerText = crewMember.role;
  crewName.innerText = crewMember.name;
  crewBio.innerText = crewMember.bio;
}

// Load tech content from json file
const techSteps = document.querySelectorAll(".tech-step"),
  techImgLandscape = document.getElementById("tech-img-landscape"),
  techImgPortrait = document.getElementById("tech-img-portrait"),
  techTerminology = document.getElementById("tech-terminology"),
  techName = document.getElementById("tech-name"),
  techDescription = document.getElementById("tech-description");

techSteps.forEach((step) => {
  step.addEventListener("click", (e) => {
    techSteps.forEach((step) => {
      step.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    // fetch data from json file
    fetchDataFromJsonFile().then((data) => {
      const clickedTechStep = Array.from(techSteps).indexOf(e.target);
      updateTechData(data.technology[clickedTechStep]);
    });
  });
});

function updateTechData(tech) {
  techImgLandscape.src = tech.images.landscape;
  techImgLandscape.alt = tech.images.alt;
  techImgPortrait.src = tech.images.portrait;
  techImgPortrait.alt = tech.images.alt;
  techTerminology.innerText = tech.terminology;
  techName.innerText = tech.name;
  techDescription.innerText = tech.description;
}
