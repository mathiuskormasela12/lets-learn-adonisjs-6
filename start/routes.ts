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

router.get('/', [MoviesController, 'index']).as('movie.index')
