import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'

import uiflowBuild from './uiflowBuild'

const app = express()
app.use(morgan('tiny'))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req)
  res.send('hello')
})

app.post('/compile', (req, res) => {
  if (!req.body.text) res.status(400).send('Error body.text is undefined')
  else res.send(uiflowBuild(req.body.text))
})

app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
)
