import { main } from './index'
import { expect } from 'chai'

describe('wh[a]t[sdaf[\nhows[your]father\nfuckdafle[gs]what\n\n', () => {

  it.only('greets', () => {
    expect(main("wh[a]tsdaf\nhows[your]father\nfuckdafle[gs]what")).to.contain("wh")
  })

})

