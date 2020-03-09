import * as express from 'express'
import * as morgan from 'morgan'

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  console.log(req)
  res.send('hello')
})

app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
)
