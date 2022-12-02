let homeEl = document.getElementById("home-pts");
let homeCount = 0;

let guestEl = document.getElementById("guest-pts");
let guestCount = 0;

function homePlus1() {
  homeCount += 1;
  homeEl.textContent = homeCount;
}

function homePlus2() {
  homeCount += 2;
  homeEl.textContent = homeCount;
}

function homePlus3() {
  homeCount += 3;
  homeEl.textContent = homeCount;
}

function guestPlus1() {
  guestCount += 1;
  guestEl.textContent = guestCount;
}

function guestPlus2() {
  guestCount += 2;
  guestEl.textContent = guestCount;
}

function guestPlus3() {
  guestCount += 3;
  guestEl.textContent = guestCount;
}
