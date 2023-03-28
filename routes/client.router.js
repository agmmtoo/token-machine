import express from 'express'

import { create } from '../controllers/client.controller.js'

const router = express.Router()

// PATH: /api/v1/client
router.route('/')
    .post(create)

export default router