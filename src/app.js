const express = require('express')
const cors = require('cors')
const routers = require('./api')
const { sequelize } = require('./models')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', routers)

// Função que faz a conexao com o banco
sequelize.sync().then(() => {
  console.log('conectado com o banco de dados.')
})

app.listen(3000, () => {
  console.log('App online!')
})