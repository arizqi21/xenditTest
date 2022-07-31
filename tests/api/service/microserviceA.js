require('dotenv').config()
const supertest = require('supertest')
const request = supertest('https://{{base}}')
const headers = {
    Authorization: ''
}

module.exports = {
    patch: async (id, query) => {
        const response = await request.patch(`/qr_codes/${id}`)
            .send(query)
            .set(headers)
        return response
    }
}