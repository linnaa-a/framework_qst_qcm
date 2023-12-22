// importer la classe Qcm
const { raw } = require('express');
const Qcm = require('./qcm');
const Question = require('./question');
const Reponse = require('./reponse');

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript', questions:[
        new Question({id: 0, title: 'Que signifie HTML ?', reponse:['HyperText Markup Language','High-Teck Multimedia Language','Hyperlink and Text Management', 'Home Tool Markup Language'], bonne_reponse:0}),
    ]}),
    new Qcm({ id: 1, name: 'Framework Frontend', nbpoints: 20, subject: 'Angular', questions:[
        new Question({id: 0, title: 'Que signifie HTML ?', reponse:['HyperText Markup Language','High-Teck Multimedia Language','Hyperlink and Text Management', 'Home Tool Markup Language'], bonne_reponse:0}),
    ]}),
    new Qcm({ id: 2, name: 'Framework Backend', nbpoints: 10, subject: 'Express', questions:[
        new Question({id: 0, title: 'Que signifie HTML ?', reponse:['HyperText Markup Language','High-Teck Multimedia Language','Hyperlink and Text Management', 'Home Tool Markup Language'], bonne_reponse:0}),
    ]}),
];


const addQcm = (rawObject) => {
    let maxId = 0;
    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints),
            questions: rawObject.questions
        });
        console.log(qcm.toJSON())
        for (let question of qcm.questions){
            console.log(question.toJSON())
        }
    qcms.push(qcm);
}

const addQuestion = (rawObject) => {
    const question = new Question(
        {
            id: rawObject.id,
            title: rawObject.title,
            reponses: rawObject.reponses,
            bonne_reponse: rawObject.bonne_reponse,
        }
        );
    return question;
}

module.exports = {qcms, addQcm, addQuestion};
