import { stripNonAlphanumeric } from './strip-non-alphanumeric'

type AliasOptions = {
  suffix?: string
}

type GenerateAliasFn = (str: string, options?: AliasOptions) => string

export const generateAlias: GenerateAliasFn = (str, options = {}) => {
  const alias = stripNonAlphanumeric(str.toLowerCase()).slice(0, 3)

  const { suffix } = options

  if (suffix) {
    return alias + ':' + suffix
  }

  return alias
}
