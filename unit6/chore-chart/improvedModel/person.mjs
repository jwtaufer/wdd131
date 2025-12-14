import Chore from "./chore.mjs";

class Person {
    constructor(name, balance, capacity, carrying, ability, queue) {
        this.name = name;
        this.balance = balance;
        this.capacity = capacity;
        this.carrying = carrying;
        this.ability = ability;
        this.queue = queue;

        // const importedQueue = this.#import();
        // if (importedQueue !== null) {
        //     importedQueue.forEach((importedChore) => this.#convertImport(importedChore));
        // }
    }

    // For the 'Add Chore' button
    addChore(chore) {
        this.#enqueue(chore);
    }

    completeChore(chore) {
        chore.completeChore();
        this.#export();
    }

    #enqueue(chore) {
        this.queue.push(chore);
        this.#export();
    }

    dequeue() {
        let chore = this.queue.splice(0, 1).pop();
        this.#export();
        return chore;
    }

    // #import() {
    //     const stored = localStorage.getItem(this.name);
    //     if (!stored) {
    //         return null;
    //     }
    //     try {
    //         return JSON.parse(stored);
    //     } catch {
    //         return null;
    //     }
    // }

    #convertImport(importedChore) {
        let chore = new Chore(
            importedChore.name,
            importedChore.complete,
            importedChore.value,
            importedChore.weight,
            importedChore.difficulty,
            importedChore.frequency);
        this.queue.push(chore);
    }

    #export() {
        localStorage.setItem(this.name, JSON.stringify(this.queue));
    }
}

export default Person;