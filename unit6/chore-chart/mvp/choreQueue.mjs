import Queue from "./queue.mjs";
import Chore from "./chore.mjs";
import chores from "./family-chore.mjs"

class ChoreQueue extends Queue {
    constructor(name) {
        super(name);

        this.#importChoreQueue();
    }

    #importChoreQueue() {
        chores.forEach((chore) => {
            let newChore = new Chore(chore);
            this.queue.push(newChore);
        });
    }    
}

export default ChoreQueue;