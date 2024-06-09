/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { Exception } from '@adonisjs/core/exceptions'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router
  .get('/movies', (ctx) => {
    return ctx.view.render('pages/movies')
  })
  .as('movies')

router
  .get('movie/:id', (ctx) => {
    // To read req.params (will return any type)
    const id = Number(ctx.params.id)

    if (id < 1) {
      // To throw custome error message
      throw new Exception('Your movie id should be greated than 0', {
        code: 'INVALID_MOVIE_ID',
        status: 400,
      })
    }

    const header = '<p>This is paragraph</p>'
    return ctx.view.render('pages/movie', { id, header })
  })
  .as('movie')
  .where('id', router.matchers.number()) // to validate route params
