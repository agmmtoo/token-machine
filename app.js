import express from 'express'

const app = express()

app.use('/', (req, res) => res.send('OK'))


export default app