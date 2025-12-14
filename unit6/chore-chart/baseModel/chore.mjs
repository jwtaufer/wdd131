class Chore {
    constructor(name, complete, value, weight, difficulty, frequency) {
        this.name = name;
        this.complete = complete;
        this.value = value;
        this.weight = weight;
        this.difficulty = difficulty;
        this.frequency = frequency;
        this.queue = [];
    }

    addSubChore(name, value, weight, difficulty, frequency) {
        const chore = new Chore(name, value, weight, difficulty, frequency);
        this.#enqueue(chore);
    }

    completeChore() {
        this.complete = true;
    }

    resetCompletion() {
        this.complete = false;
    }

    #enqueue(chore) {
        this.queue.push(chore);
    }
}

export default Chore;