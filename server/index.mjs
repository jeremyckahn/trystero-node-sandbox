import Koa from 'koa'
import { joinRoom } from 'trystero'
const app = new Koa()

joinRoom(
  {
    appId: 'trystero-node-support-testing',
  },
  'global'
)

app.listen(3500)
