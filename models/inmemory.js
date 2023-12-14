// importer la classe Qcm
const Qcm = require('./qcm');
const Question = require('./question');
const Reponse = require('./reponse');

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript' }),
    new Qcm({ id: 1, name: 'Framework Frontend', nbpoints: 20, subject: 'Angular' }),
    new Qcm({ id: 2, name: 'Framework Backend', nbpoints: 10, subject: 'Express' }),
];

const questions = [
    new Question({id: 0, title: 'Que signifie HTML ?', reponse:['HyperText Markup Language','High-Teck Multimedia Language','Hyperlink and Text Management', 'Home Tool Markup Language']}),
    new Question({id: 1, title: 'Quel rappeur est surnommé Slim Shady ?', reponse:['Kanye West','Eminem','Jay-Z', 'Drake']}),
    new Question({id: 2, title: 'Quel est le méchant principal dans Le Roi Lion ?', reponse:['Scar','Jafar','Ursula','Cruella']}),
    new Question({id: 3, title: 'Quelle est la capitale du Japon ?', reponse:['Tokyo','Paris','Alger','Seoul']}),
];

const reponses = [
    new Reponse({id:0, id_question:0, title:'Que signifie HTML ?', bonne_reponse:0}),
    new Reponse({id:1, id_question:1, title:'Quel rappeur est surnommé Slim Shady ?', bonne_reponse:1}),
    new Reponse({id:2, id_question:2, title:'Quel est le méchant principal dans Le Roi Lion ?', bonne_reponse:0}),
    new Reponse({id:3, id_question:3, title:'Quelle est la capitale du Japon ?', bonne_reponse:0}),
];

const addQcm = (rawObject) => {
    let maxId = 0;
    qcms.forEach((qcm) => {
        if (maxId < qcm.Id) {
            maxId = qcm.id;
        }
    });
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints)
        });
    qcms.push(qcm);
}

const addQuestion = (rawObject) => {
    let maxId = 0;
    questions.forEach((question) => {
        if (maxId < question.Id) {
            maxId = question.id;
        }
    });
    const question = new Question(
        {
            id: maxId + 1,
            title: rawObject.title,
            reponse: rawObject.reponse,
        });
    questions.push(question);
}


const addReponse = (rawObject) => {
    let maxId = 0;
    reponses.forEach((reponse) => {
        if (maxId < reponse.Id) {
            maxId = reponse.id;
        }
    });
    const reponse = new Reponse(
        {
            id: maxId + 1,
            id_question: rawObject.id_question,
            title: rawObject.title,
            reponse: rawObject.reponse,
        });
    reponse.push(reponses);
}

module.exports = {qcms, addQcm};
module.exports = {questions, addQuestion};
module.exports = {reponses, addReponse};
