import crypto from 'crypto'

export async function create(req, res) {
    try {
        const client = { client: req.client }
        res.status(201).json(client)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// clientNumber param loader
export async function getClient(req, res, next, clientNumber) {
    try {
        const client = { clientNumber }
        req.client = client
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}