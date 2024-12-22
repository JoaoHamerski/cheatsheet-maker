import { faker } from '@faker-js/faker'
import type { CheatSheet } from '@prisma/client'
import { upperFirst } from 'lodash-es'
import type { FactoryFunction } from './types'

export const makeCheatSheet: FactoryFunction<CheatSheet> = (
  overwrites = {},
) => {
  const timestamp = faker.date.past()
  const title = faker.lorem.words({ min: 2, max: 4 })
  const uuid = faker.string.uuid()

  return {
    title: upperFirst(title),
    uuid,
    alias: title.substring(0, 6).toLocaleLowerCase(),
    createdAt: timestamp,
    updatedAt: timestamp,
    ...overwrites,
  } as CheatSheet
}
