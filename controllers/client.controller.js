export async function create(req, res) {
    try {
        const client = { client: req.body }
        res.status(201).json(client)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}