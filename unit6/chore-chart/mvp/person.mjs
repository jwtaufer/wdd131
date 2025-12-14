import Queue from "./queue.mjs";

class Person {
    constructor(name) {
        this.name = name;
        this.balance = 0;
        this.capacity = 1;
        this.carrying = 0;
        this.chores = new Queue(name);
    }

    addChore(chore) {
        this.chores.push(chore);
    }

    completeChore(choreName) {
        let chore = this.chores.getChore(choreName);
        if(chore === undefined) {
            return;
        }
        chore.completeChore();
    }

    removeCompletedChores(){
        let array = [];
        let removed = 0;
        for(let choreIndex in this.chores.queue) {
            let chore = this.chores.peek(choreIndex - removed);
            if(chore.complete) {
                array.push(this.chores.dequeue(choreIndex - removed));
                removed += 1;
            }
        }
        return array;
    }

    resetBalance() {
        this.balance = 0;
    }

    renderPersonCard() {
        const nameId = this.name.toLowerCase();

        return `<div class="queue-box">
        <div class="name-box">
            <h2>${this.name}: $${this.balance.toFixed(2)}</h2>
            <button id="${nameId}-paid-button" type="button">Paid</button>
        </div>
        <form>
            <ul>
                ${this.chores.renderChoreTemplate()}
            </ul>
        </form>
        <div id="button-box">
            <button id="${nameId}-add-chore-button" type="button">Add Chore</button>
        </div>
    </div>`
    }

    enqueueChores(choreQueue) {
        let skip = 0;
        let chore = undefined;
        while((chore = choreQueue.peek(skip)) !== undefined) {
            if(this.carrying >= this.capacity) {
                return;
            }

            if(this.carrying + chore.value <= this.capacity) {
                choreQueue.dequeue(skip);
                this.chores.enqueue(chore);

                this.carrying += chore.value;

                console.log(chore);
                console.log(this.chores);
            } else {
                skip += 1;
            }
        }
    }
}

export default Person;