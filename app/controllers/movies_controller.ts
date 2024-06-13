import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  index({ view, request }: HttpContext) {
    // Read query params
    const favouriteFrameworks = request.qs().name
    console.info(favouriteFrameworks)
    return view.render('pages/home', {
      favouriteFrameworks,
      isGaeul: true,
    })
  }
}
