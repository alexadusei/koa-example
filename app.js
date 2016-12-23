import Koa from 'koa'

import mainRoutes from './routes/main'

const app = new Koa()
const config = require('./config')
const port = config.PORT

app.use(mainRoutes.routes())

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app