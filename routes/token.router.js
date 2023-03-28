import express from 'express'

import { create, getClient } from '../controllers/token.controller.js'

const router = express.Router()

// PATH: /api/v1/token

// load params, attach to req
router.param('clientNumber', getClient)

router.route('/:clientNumber')
    .post(create)

export default router