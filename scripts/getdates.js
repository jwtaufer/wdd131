// Add the year to first paragraph in footer.

const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

//Add the last date modified to second paragraph in footer.

let modified = document.querySelector("#lastModified");

modified.innerHTML = new Date(document.lastModified);
