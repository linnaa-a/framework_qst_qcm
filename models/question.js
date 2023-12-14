class Question {

    #id;
    #title;
    #reponse;

    constructor(questionToCreate) {
        this.#id = questionToCreate.id;
        this.#title = questionToCreate.title;
        this.#reponse = questionToCreate.reponse;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }6

    get reponse() {
        return this.#reponse;
    }
}

module.exports = Question;