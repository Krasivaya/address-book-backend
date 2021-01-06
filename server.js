const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./src/models')
const router = require('./src/routes/route')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/contacts', router)

db.sequelize.sync()

app.get('/', (req, res) => res.json({
  status: 200,
  message: 'Welcome to Address Book API'
}))


const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
})