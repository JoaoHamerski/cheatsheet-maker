import { faker } from '@faker-js/faker'
import type { CheatSheetItem } from '@prisma/client'

type MakeCheatSheetItemFn = (
  overwrites?: Partial<CheatSheetItem>,
) => CheatSheetItem

export const makeCheatSheetItem: MakeCheatSheetItemFn = (overwrites = {}) => {
  const timestamp = faker.date.past()

  return {
    uuid: faker.string.uuid(),
    title: faker.lorem.sentence().replace('.', '.'),
    body: faker.lorem.paragraphs(),
    createdAt: timestamp,
    updatedAt: timestamp,
    ...overwrites,
  } as CheatSheetItem
}
