const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello minipunch!'
  })
})

router.get('/getTitle', async (ctx, next) => {
  ctx.body = {
    title: 'Welcome to minipunch'
  }
})

router.get('/getContent', async (ctx, next) => {
  ctx.body = 'To get started'
})

module.exports = router
