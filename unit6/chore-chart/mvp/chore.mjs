class Chore {
    constructor(chore) {
        this.name = chore.name;
        this.value = chore.value;
        this.complete = chore.complete;
        this.subChores = [];

        this.#importSubChores(chore);
    }

    completeChore() {
        this.complete = true;
    }

    resetChore() {
        this.complete = false;
        this.subChores.forEach((subChore) => {
            subChore.resetChore();
        });
    }

    #importSubChores(chore) {
        if(chore && Array.isArray(chore.subChores)){
            for (const index in chore.subChores) {
                 const thatChore = new Chore(chore.subChores[index]);
                this.subChores.push(thatChore);
            }
        }
    }
}

export default Chore;