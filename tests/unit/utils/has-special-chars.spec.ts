import { describe, expect, it } from 'vitest'
import { hasSpecialChars } from '~/server/utils/has-special-chars'

describe('Special chars on string', () => {
  it('is true for special chars string', () => {
    expect(hasSpecialChars('Hello!@#')).toBeTruthy()
  })

  it('is false for non-special chars string', () => {
    expect(hasSpecialChars('Hello')).toBeFalsy()
  })

  it('asserts whitespace as non-special char', () => {
    expect(hasSpecialChars('Hello World')).toBeFalsy()
  })

  it('is false for an empty string', () => {
    expect(hasSpecialChars('')).toBeFalsy()
  })

  it('is true for a string with only special chars', () => {
    expect(hasSpecialChars('!@#$')).toBeTruthy()
  })

  it('is false for numbers only', () => {
    expect(hasSpecialChars('1234')).toBeFalsy()
  })

  it('is true for mixed special and non-special chars', () => {
    expect(hasSpecialChars('Hello123!')).toBeTruthy()
  })
})
