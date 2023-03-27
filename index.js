import { createServer } from 'http'
import app from './app.js'
import { PORT } from './config/constants.js'

const server = createServer(app)

server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}/`))