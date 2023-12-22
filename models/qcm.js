class Qcm {

    #id;
    #name;
    #theme;
    #subject;
    #author;
    #nbpoints;
    #questions;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#subject = qcmToCreate.subject;
        this.#author = qcmToCreate.author;
        this.#nbpoints = qcmToCreate.nbpoints;
        this.#questions = qcmToCreate.questions;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get theme() {
        return this.#theme;
    }

    get subject() {
        return this.#subject;
    }

    get author() {
        return this.#author;
    }

    get nbpoints() {
        return this.#nbpoints;
    }

    get questions() {
        return this.#questions;
    }

    toJSON(key) {
        console.log(key);
        return {id: this.#id, name: this.#name, questions: this.questions};
    }
}

module.exports = Qcm;