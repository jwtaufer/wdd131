import family from "./my-family.mjs"
import chores from "./family-chore.mjs"

function personCardTemplate(person) {
    return `<div class="queue-box">
                <div class="name-box">
                    <h2>${person.name}: $${person.balance.toFixed(2)}</h2>
                    <button id="paid${person.name.toLowerCase()}"type="button">Paid</button>
                </div>
                <form id="${person.name.toLowerCase()}-form">
                    <ul id="${person.name.toLowerCase()}-chore-list"></ul>
                </form>
                <div id="${person.name.toLowerCase()}-button-box" class="button-box">
                    <button id="add-chore-${person.name.toLowerCase()}" type="button">Add Chore</button>
                </div>
            </div>`;
}

function renderPersonCards(family) {
    let html = ``;

    family.forEach((person) => {
        html += personCardTemplate(person);
    });

    document.querySelector("main").innerHTML = html;
}

function choreTemplate(chore) {
    return `<li id="${chore.name.toLowerCase()}">
                <input type="checkbox" id="${chore.name.toLowerCase()}" name="${chore.name.toLowerCase()}">
                <label for="${chore.name.toLowerCase()}">${chore.name}</label>
                <ul id="${chore.name.toLowerCase()}-sub-chores">
                    ${renderSubChoreQueue(chore)}
                </ul>
            </li>`;
}

function renderChoreQueues(family, chores) {
    family.forEach((person) => {
        let html = ``;

        chores.forEach((chore) => {
            html += choreTemplate(chore);
        });

        document.querySelector(`#${person.name.toLowerCase()}-chore-list`).innerHTML = html;
    });   
}

function subChoreTemplate(chore) {
    return `<li id="${chore.toLowerCase()}">
                <input type="checkbox" id="${chore.toLowerCase()}" name="${chore.toLowerCase()}">
                <label for="${chore.toLowerCase()}">${chore}</label>
            </li>`;
}

function renderSubChoreQueue(chore) {
    let html =``;

    chore.subChores.forEach((subChore) => {
        html += subChoreTemplate(subChore);
    });

    return html;
}

function init() {
    renderPersonCards(family);
    renderChoreQueues(family, chores);
}

function toggleChoreCompletion(chore) {
    let checkBox = document.querySelector(`${chore.name}`);

    if(checkBox.checked) {
        chore.complete = true;
        
    } else {
        chore.complete = false;
    }
}

init();

// document.querySelector(`input[type="checkbox"]`).addEventListener("change", toggleChoreCompletion);