const { default: test } = require('node:test')
const service = require('../service/microserviceA')
let token = 'xxx'

const body = {
    "description": "something in description",
    "callback_url": "https://www.google.com/",
    "amount": 5000 
}

beforeAll(() => {
    token = 'getting token from somewhere else'
})

describe ('PATCH microservice A', () => {
    test('success', async () => {
        const response = await service.patch(token, body)
        expect(response.statusCode).toBe(200)
        expect(response.body).toContainKeys(['description', 'callback_url', 'amount'])
        expect(response.body.description).toEqualCaseInsensitive(body.description)
        expect(response.body.callback_url).toEqualCaseInsensitive(body.callback_url)
        expect(response.body.amount).toEqualCaseInsensitive(body.amount)
        
    })
})