import type { Tag } from '@prisma/client'
import type { FactoryFunction } from './types'
import { faker } from '@faker-js/faker'

export const makeTag: FactoryFunction<Tag> = (overwrites = {}) => {
  return {
    name: faker.lorem.word(),
    ...overwrites,
  } as Tag
}
