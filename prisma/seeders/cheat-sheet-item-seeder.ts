import { faker } from '@faker-js/faker'
import { map, shuffle, take, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheetItem } from '../factories/cheat-sheet-item-factory'
import type { CheatSheetItem, CheatSheetItemsOnTags } from '@prisma/client'

export const cheatSheetItemSeeder = async () => {
  const cheatSheetIds = (
    await prisma.cheatSheet.findMany({
      select: { id: true },
    })
  )
    .map(({ id }) => id)
    .sort()

  const cheatSheetItems = []

  for (const cheatSheetId of cheatSheetIds) {
    const ITEMS_PER_CHEAT_SHEET = faker.number.int({ min: 0, max: 20 })

    const generatedItems = times(ITEMS_PER_CHEAT_SHEET, () =>
      makeCheatSheetItem({
        cheatSheetId,
      }),
    )

    cheatSheetItems.push(...generatedItems)
  }

  const createdItems = await prisma.cheatSheetItem.createManyAndReturn({
    data: cheatSheetItems,
  })

  await seedCheatSheetItemTags(createdItems)
}

const seedCheatSheetItemTags = async (cheatSheetItems: CheatSheetItem[]) => {
  const cheatSheetItemIds = map(cheatSheetItems, 'id')

  const tagIds = (await prisma.tag.findMany({ select: { id: true } })).map(
    ({ id }) => id,
  )

  const pivots = []

  for (const cheatSheetItemId of cheatSheetItemIds) {
    const TAGS_PER_ITEM = faker.number.int({ min: 0, max: 5 })
    const ids = take(shuffle(tagIds), 5)

    const generatedPivots = times<Omit<CheatSheetItemsOnTags, 'id'>>(
      TAGS_PER_ITEM,
      (index) => {
        return {
          cheatSheetItemId,
          tagId: ids[index],
        }
      },
    )

    pivots.push(...generatedPivots)
  }

  await prisma.cheatSheetItemsOnTags.createMany({
    data: pivots,
  })
}
