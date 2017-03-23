const blerg = require('./blerg')

require('chai').should()

describe('bcoe-lerna-2', () => {
  it('works as expected', () => {
    blerg.b.should.equal(33)
  })
})
