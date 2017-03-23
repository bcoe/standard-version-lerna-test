require('chai').should()

const lernaTest = require('./')

describe('bcoe-lerna-3', () => {
  it('has a test', () => {
    lernaTest.a.should.equal(99)
  })
})
