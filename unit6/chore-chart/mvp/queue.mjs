import Chore from "./chore.mjs";
import chores from "./family-chore.mjs"

class Queue {
    constructor(name) {
        this.name = name;
        this.queue = [];
    }

    enqueue(chore) {
        this.queue.push(chore);
    }

    dequeue(index) {
        index = index || 0;
        let chore = this.queue.splice(index, 1).pop();
        return chore;
    }

    peek(index) {
        index = index || 0;

        if(index > this.queue.length) {
            return undefined;
        }

        return this.queue[index];
    }

    getChore(choreName) {
        return this.queue.find((chore) => chore.name === choreName );
    }

    renderChoreTemplate() {
        let html = ``;
        this.queue.forEach((chore) => {
            const choreId = chore.name.toLowerCase()
            if(chore && typeof chore.name === "string") {
                html += `<li id="${choreId}">
                <input type="checkbox" id="${choreId}" name="${choreId}">
                <label for="${choreId}">${chore.name}</label>
                <ul id="${choreId}-sub-chores">
                    ${this.renderSubChoreQueue(chore)}
                </ul>
            </li>`
            }
        })

        return html;        
    }

    renderSubChoreQueue(chore) {
        if(chore && Array.isArray(chore.subChores)) {
            let html = ``;
            chore.subChores.forEach((subChore) => {
                html += this.subChoreTemplate(subChore);
            });

            return html;
        }
    }

    subChoreTemplate(chore) {
        const choreId = chore.name.toLowerCase();

        return `<li id="${choreId}">
                    <input type="checkbox" id="${choreId}" name="${choreId}">
                    <label for="${choreId}">${chore.name}</label>
                </li>`;
    }
}

export default Queue;