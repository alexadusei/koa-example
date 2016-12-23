import Router from 'koa-router'

const router = new Router()

// Set prefix for router. Routes accessed by localhost/user/:name
router.prefix('/user')

router.get('/:name', async ctx => {
  const user = ctx.params.name
  ctx.body = `Hello, ${user}! This is the /user route`
})

export default router
