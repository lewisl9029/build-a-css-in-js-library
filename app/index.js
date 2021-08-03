import * as react_ from 'react'
import * as reactDom_ from 'react-dom'
import * as app_ from './app_.js'
import * as a_ from 'public/a_.js'

const root = document.createElement('div')
document.body.appendChild(root)

reactDom_.render(a_.cE(app_.app), root)

if (import.meta.hot) {
  import.meta.hot.accept()
}
