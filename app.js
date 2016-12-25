import Koa from 'koa'
import logger from 'koa-logger'

import config from './config'
import mainRoutes from './routes/main'
import userRoutes from './routes/user'

const app = new Koa()

app.use(logger())
app.use(mainRoutes.routes())
app.use(userRoutes.routes())

app.start = (port = config.PORT) => {
  return app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

export default app
