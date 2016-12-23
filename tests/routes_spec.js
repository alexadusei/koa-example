import {expect} from 'chai'
import request from 'supertest'
import app from '../app'

describe('ROUTES', () => {
  const inst = app.start()

  describe('MAIN ROUTES', () => {

    describe('GET /', () => {
      it("should respond with respective text for '/'", async () => {
        const res = await request(inst).get('/')
        
        expect(200)
        expect(res.text).to.equal('Welcome to Koa! This is the main route')
      })
    })

    describe('GET /about', () => {
      it("should respond with respective text for '/about'", async () => {
        const res = await request(inst).get('/about')

        expect(200)
        expect(res.text).to.equal('This is the /about route. Learn a lot here')
      })
    })

  })

  describe('USER ROUTES', () => {

    describe('GET /user/:name', () => {
      it("should respond with respective name parameter", async () => {
        const name = 'alex'
        const res = await request(inst).get(`/user/${name}`)

        expect(200)
        expect(res.text).to.equal('Hello, alex! This is the /user route')
      })
    })
  })
  
})
