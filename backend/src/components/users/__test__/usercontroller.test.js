'use strict'

const { createUserController } = require('../controllers')
jest.mock('../service')
const userService = require('../service')

const mockRequest = {
    params: {},
    headers: {
        'Content-Type': 'application/json'
    },
    query: {
        'currency': 'usd'
    }
}

const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnThis(res)
    res.json = jest.fn().mockReturnThis(res)
    return res
}


let mReq
let mRes

describe('Users Controller test OK', () => {

    beforeEach(() => {
        mReq = mockRequest
        mRes = mockResponse()
    })

    test('Should return response success when createUserController is called', async () => {


        const spy = jest.spyOn(userService, 'createUserService')
            .mockImplementationOnce(
                () => Promise.resolve({
                    data: 'success'
                }))

        await createUserController(mReq, mRes)
        expect(mRes.json).toHaveBeenCalledWith({ data: 'success' })
        spy.mockRestore()
    })
})