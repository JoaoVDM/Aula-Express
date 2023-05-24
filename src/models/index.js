// Inicializou o arquivo de configuração do Sequelize junto com os Models

const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Curso = require('./curso')

const curso = Curso(sequelize, Sequelize.DataTypes)

const db = {
  curso,
  sequelize
}

module.exports = db