// controllers/qcms.js
const { qcms, addQcm, addQuestion} = require('../models/inmemory');

const displayQcms = (req, res) => {
    res.render('qcms', {qcms: qcms});
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.render('qcm', {qcm});
}

const displayQcmJson = (req, res) => {
    res.json({qcms});
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {

  let questions=[]

  for (let i = 1; i <= 4; i++) {
    let reponses=[]
    let bonne_reponse
    for (let j = 1; j <= 4; j++) {  
      reponses.push(req.body[`option${j}_q${i}`])
      req.body[`checkbox${j}_q${i}`] === 'on' ? bonne_reponse=j-1:''
    }
    const questionData = {
      id: i,
      title: req.body[`question${i}`],
      reponses: reponses,
      bonne_reponse: bonne_reponse
    };
    questions.push(addQuestion(questionData))
  }
  
  const qcmData = {
    name: req.body.name,
    subject: req.body.subject,
    nbpoints: req.body.nbpoints,
    questions: questions,
  };
  addQcm(qcmData);

  res.redirect('/qcms');
};

module.exports = {displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed};

