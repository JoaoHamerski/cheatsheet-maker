import { describe, expect, it } from 'vitest'
import { generateAlias } from '~/server/utils/generate-alias'

describe('Aliases generation', () => {
  it('should return the first 3 chars in lowercase', () => {
    expect(generateAlias('Hello World')).to.be.equal('hel')
  })

  it('should be less than or equal 3 chars', () => {
    expect(generateAlias('hello world').length).to.be.lessThanOrEqual(3)
  })

  it('should contain a suffix', () => {
    expect(generateAlias('hello world', { suffix: '123' })).to.be.equal(
      'hel:123',
    )
  })

  it('should strip special chars', () => {
    expect(generateAlias('!@#!@#')).to.be.equals('')
    expect(generateAlias('!H@ell!o World')).to.be.equals('hel')
    expect(generateAlias('!H@e##llo World', { suffix: '123' })).to.be.equal(
      'hel:123',
    )
  })
})
