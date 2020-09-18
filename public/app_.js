import * as a_ from 'public/a_.js'
import * as presentation_ from 'public/components/presentation_.js'
import * as style_ from 'public/lib/style_.js'

export const app = () =>
  a_.cE(style_.provider, [
    a_.cE(style_.standard, [a_.cE(presentation_.presentation)]),
  ])
