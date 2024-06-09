/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home.index')

router
  .get('/movie', (ctx) => {
    // To return string
    // return 'Hello Movie'

    // First way to add params to the page
    ctx.view.share({ title: 'Queen of tears' })

    // To render view from Edge template engine
    // return ctx.view.render('pages/movie')

    // To render a view and send a params in the same time
    return ctx.view.render('pages/movie', { title: 'Boruto' })
  })
  .as('movie.index')

router
  .get('/user', (ctx) => {
    ctx.view.share({
      name: 'Sarada',
    })
    return ctx.view.render('pages/user')
  })
  .as('user.index') // To give a name/aliases for a route to use route method on edge template engine
