const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')
var mongoose = require('mongoose');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    console.log(questions)
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    return 100 * numberOfCorrectQuestions / questions.length }

const findAttemptsForQuiz = (qzid) => quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title _id')

const createAttempt = (qid, attempt) => {
    var id = new mongoose.mongo.ObjectId();
    return quizAttemptsModel.create({_id: id, quiz: qid, answers: attempt, score: scoreQuiz(attempt) })
    }

module.exports = { createAttempt, findAttemptsForQuiz }