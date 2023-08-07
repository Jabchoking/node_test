const express = require('express')
const app = express()
const port = 3000
const  cors = require('cors');
const customerRouter = require('./routes/customer.router');

app.use( express.json())
app.use( cors() )

app.use('/customer', customerRouter )

app.listen(port, () => {
  console.log(`서버실행 ${port}`)
})