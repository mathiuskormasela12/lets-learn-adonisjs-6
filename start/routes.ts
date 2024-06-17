/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', (ctx) => {
  // When we pass params using ctx.view.share, it will share the params accross all components
  ctx.view.share({ year: 2023, title: 'wkkw' })

  // If we sahre params like this, the param is only for the particular page. when you access it from the component inside that particular page, the value will be undefined
  return ctx.view.render('pages/home', { year: 2024 })
})
