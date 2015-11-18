import $ from 'jquery'
import page from 'page'
import tplHome from '../templates/home.hbs'

const $content = $('#content')
const limit = 30
let globalError

export function home() {
  $content.html(tplHome())
}
