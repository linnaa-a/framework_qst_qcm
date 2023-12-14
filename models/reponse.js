class Reponse {

    #id;
    #id_question
    #title;
    #bonne_reponse;

    constructor(questionToCreate) {
        this.#id = questionToCreate.id;
        this.#id_question = questionToCreate.id_question;
        this.#title = questionToCreate.title;
        this.#bonne_reponse = questionToCreate.bonne_reponse;
    }

    get id() {
        return this.#id;
    }

    get id_question() {
        return this.#id_question;
    }

    get title() {
        return this.#title;
    }6

    get bonne_reponse() {
        return this.#bonne_reponse;
    }
}

module.exports = Reponse;