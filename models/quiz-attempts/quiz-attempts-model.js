const mongoose = require('mongoose')
const quizAttemptSchema = require('./quiz-attemts-schema')
const quizAttemptModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptSchema
)
module.exports = quizAttemptModel
