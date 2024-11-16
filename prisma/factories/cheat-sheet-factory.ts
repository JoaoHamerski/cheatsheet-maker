import { faker } from '@faker-js/faker'
import type { CheatSheet } from '@prisma/client'
import { upperFirst } from 'lodash-es'
import { generateAlias } from '~/server/utils/generate-alias'

type MakeCheatSheetFn = (overwrites?: Partial<CheatSheet>) => CheatSheet

export const makeCheatSheet: MakeCheatSheetFn = (
  overwrites = {},
): CheatSheet => {
  const title = faker.lorem.words({ min: 2, max: 10 })
  const uuid = faker.string.uuid()

  return {
    title: upperFirst(title),
    uuid,
    alias: generateAlias(title, { suffix: uuid.slice(0, 3) }),
    ...overwrites,
  } as CheatSheet
}
