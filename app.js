import Koa from 'koa'

import mainRoutes from './routes/main'
import userRoutes from './routes/user'

const app = new Koa()
const config = require('./config')

app.use(mainRoutes.routes())
app.use(userRoutes.routes())

app.start = (port = config.PORT) => {
  return app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

export default app
