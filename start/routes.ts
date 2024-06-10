/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MoviesController = () => import('#controllers/movies_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// To binding router to controller (new way)
router
  .get('/movie', [
    MoviesController /** Object Controller */,
    'getMovie' /** method name on controller */,
  ])
  .as('movie.get')

// To binding router to controller (old way)
router.get('/movies', '#controllers/movies_controller.getMovies').as('movies.get')
