import { describe, expect, it } from 'vitest'
import { generateAlias } from '~/server/utils/generate-alias'
import { hasSpecialChars } from '~/server/utils/has-special-chars'

describe('Aliases generation', () => {
  it('should return the first 3 chars in lowercase', () => {
    expect(generateAlias('Hello World')).to.be.equal('hel')
  })

  it('should be less than or equal 3 chars', () => {
    expect(generateAlias('hello world').length).to.be.lessThanOrEqual(3)
  })

  it('should contain a suffix', () => {
    expect(
      generateAlias('hello world', { suffix: '123' }).endsWith('123'),
    ).toBeTruthy()
  })

  it('should strip special chars', () => {
    expect(hasSpecialChars(generateAlias('!Hello World'))).toBeFalsy()
  })

  it('should be empty for empty string', () => {
    expect(generateAlias('')).to.be.equals('')
  })
})
