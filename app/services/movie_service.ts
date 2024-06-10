import app from '@adonisjs/core/services/app'
import fs from 'node:fs/promises'
import { MarkdownFile } from '@dimerapp/markdown'
import { toHtml } from '@dimerapp/markdown/utils'

export default class MovieService {
  async getMovie() {
    // read url path in adonisjs
    const file = app.makeURL('resources/views/user.md')
    const mdRaw = await fs.readFile(file, 'utf8')
    // Instantiate a md object
    const md = new MarkdownFile(mdRaw)
    // read md file and assign on md instanes
    await md.process()

    // to read yaml section
    console.log(md.frontmatter.title)

    // Convertt md to html
    return toHtml(md)
  }
}
