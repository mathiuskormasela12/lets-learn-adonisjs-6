import MovieService from '#services/movie_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async getMovie({ view }: HttpContext) {
    const md = await new MovieService().getMovie()

    return view.render('pages/movie', { md })
  }

  getMovies({ view }: HttpContext) {
    const movies = [
      {
        id: 1,
        title: 'Queen of tears',
      },
      {
        id: 2,
        title: 'Because this is my first life',
      },
    ]
    return view.render('pages/movies', { movies })
  }
}
