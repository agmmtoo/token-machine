import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(compression())

// routes
// app.use('')

app.use('/', (req, res) => res.send('OK'))


export default app