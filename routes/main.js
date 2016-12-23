import Router from 'koa-router'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'Welcome to Koa! This is the main route'
})

router.get('/about', async ctx => {
  ctx.body = 'This is the /about route. Learn a lot here'
})

export default router
