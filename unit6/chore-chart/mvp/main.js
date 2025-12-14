import Chore from "./chore.mjs";
import ChoreQueue from "./choreQueue.mjs";
import Person from "./person.mjs";
import Family from "./my-family.mjs";

const choreQueue = new ChoreQueue("ChoreQueue");
const family = [];

function importFamily() {
    Family.forEach((member) => {
        const person = new Person(member.name);
        family.push(person);
    });
}

function initHomePage() {
    importFamily();
    const query = document.querySelector("#index-main");

    if(query !== null) {
        family.forEach((member) => {
            member.enqueueChores(choreQueue);
            query.innerHTML += member.renderPersonCard();
        });
    }
}

function initChildPage() {
    const html = childPageTemplate();
    const query = document.querySelector("#chore-queue-main");
    if(query !== null) {
        query.innerHTML = html;
    }

}

function childPageTemplate() {
    return `<div class="queue-box" id="unassigned-chores">
            <div class="name-box">
                <h2>Unassigned Chores</h2>
            </div>
            <form>
                <ul>
                    ${choreQueue.renderChoreTemplate()}
                </ul>
            </form>
            <!-- <div class="button-box">
                <button type="button">Add Chore</button>
            </div> -->
        </div>`
}

initHomePage();
initChildPage();

document.querySelector("#mom-paid-button").addEventListener("click", mom.resetBalance());
document.querySelector("#dad-paid-button").addEventListener("click", dad.resetBalance());
document.querySelector("#roe-paid-button").addEventListener("click", roe.resetBalance());
document.querySelector("#elise-paid-button").addEventListener("click", elise.resetBalance());

// console.log(childPageTemplate());