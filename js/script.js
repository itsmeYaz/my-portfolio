const year = document.querySelector("#year");
const date = new Date();

//get current year
let getYear = date.getFullYear();

//render year
year.textContent = getYear;
