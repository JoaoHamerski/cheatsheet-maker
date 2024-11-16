import { describe, expect, it } from 'vitest'
import { generateAlias } from '~/server/utils/generate-alias'
import { hasSpecialChars } from '~/server/utils/has-special-chars'

describe('Aliases generation', () => {
  it('returns the first 3 chars in lowercase', () => {
    expect(generateAlias('Hello World')).to.be.equal('hel')
  })

  it('is less than or equal 3 chars', () => {
    expect(generateAlias('hello world').length).to.be.lessThanOrEqual(3)
  })

  it('contains a suffix', () => {
    expect(
      generateAlias('hello world', { suffix: '123' }).endsWith('123'),
    ).toBeTruthy()
  })

  it('generates alias for less than 3 chars string', () => {
    expect(generateAlias('he')).to.be.equal('he')
    expect(generateAlias('h')).to.be.equal('h')
  })

  it('contains a suffix for less than 3 chars string', () => {
    expect(generateAlias('he', { suffix: '123' }))
  })

  it('strip special chars', () => {
    expect(hasSpecialChars(generateAlias('!Hello World'))).toBeFalsy()
  })

  it('is empty for empty string', () => {
    expect(generateAlias('')).equals('')
  })
})
