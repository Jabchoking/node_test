const express = require('express')
const app = express()
const port = 3000
const  cors = require('cors');
const testRouter = require('./routes/rrrr');
// const connection = require('./models');
app.use( express.json())
app.use( cors() )

app.use('/todos', testRouter )

app.listen(port, () => {
  console.log(`서버실행 ${port}`)
})