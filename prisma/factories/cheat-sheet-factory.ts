import { faker } from '@faker-js/faker'
import type { CheatSheet } from '@prisma/client'
import { upperFirst } from 'lodash-es'
import { generateAlias } from '~/server/utils/generate-alias'
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
    alias: generateAlias(title, { suffix: uuid.slice(0, 3) }),
    createdAt: timestamp,
    updatedAt: timestamp,
    ...overwrites,
  } as CheatSheet
}
