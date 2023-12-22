class Question {

    #id;
    #title;
    #reponses;
    #bonne_reponse

    constructor(questionToCreate) {
        this.#id = questionToCreate.id;
        this.#title = questionToCreate.title;
        this.#reponses = questionToCreate.reponses;
        this.#bonne_reponse = questionToCreate.bonne_reponse;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get reponses() {
        return this.#reponses;
    }

    get bonne_reponse() {
        return this.#bonne_reponse;
    }

    toJSON() {
        return {id: this.#id, title: this.#title, reponses: this.#reponses, bonne_reponse: this.#bonne_reponse};
    }

}

module.exports = Question;