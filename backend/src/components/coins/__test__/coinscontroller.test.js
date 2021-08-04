'use strict'

const { createCoinController, getAllCoins, getCoinController } = require('../controllers')
jest.mock('../service')
const coinService = require('../service')



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

describe('Coins Controller test OK', () => {

    beforeEach(() => {
        mReq = mockRequest
        mRes = mockResponse()
    })

    test('Should return response success when getAllCoins is called', async () => {


        const spy = jest.spyOn(coinService, 'getAllCoins')
            .mockImplementationOnce(
                () => Promise.resolve({
                    data: 'success'
                }))

        await getAllCoins(mReq, mRes)
        expect(mRes.json).toHaveBeenCalledWith({ data: 'success' })
        spy.mockRestore()
    })

    test('Should return response success when getCoinController is called', async () => {
        mReq = {
            ...mReq,
            params: {
                id: '1'
            }
        }

        const spy = jest.spyOn(coinService, 'getCoinsListByUser')
            .mockImplementationOnce(
                () => Promise.resolve({
                    data: 'success'
                }))

        await getCoinController(mReq, mRes)
        expect(mRes.json).toHaveBeenCalledWith({ data: 'success' })
        spy.mockRestore()
    })

    test('Should return response success when createCoinController is called', async () => {
        mReq = {
            body: {
                "name": "Bitcoin",
                "symbol": "btc",
                "price": 39039,
            }
        }

        const spy = jest.spyOn(coinService, 'createCoinService')
            .mockImplementationOnce(
                () => Promise.resolve({
                    data: 'success'
                }))

        await createCoinController(mReq, mRes)
        expect(mRes.json).toHaveBeenCalledWith({ data: 'success' })
        spy.mockRestore()
    })

})

describe('Coins Controller test ERROR', () => {

    beforeEach(() => {
        mReq = mockRequest
        mRes = mockResponse()
    })

    test('Should return response error when getAllCoins is called', async () => {


        const spy = jest.spyOn(coinService, 'getAllCoins')
            .mockImplementationOnce(
                () => Promise.reject({
                    data: 'error',
                    status: 500
                }))

        await getAllCoins(mReq, mRes)
        expect(mRes.json).toHaveBeenCalledWith({ message: 'Error consultando la lista de criptomonedas' })
        spy.mockRestore()
    })


})