import { faker } from '@faker-js/faker'
import { flatten, shuffle, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheetItem } from '../factories/cheat-sheet-item-factory'
import type { CheatSheetItem, CheatSheetItemsOnTags, Tag } from '@prisma/client'
import { pluckModelField } from '../utils'

export const cheatSheetItemSeeder = async () => {
  const cheatSheetIds = (await pluckModelField(
    'CheatSheet',
    'id',
  )) as CheatSheetItem['id'][]

  await prisma.cheatSheetItem.createMany({
    data: flatten(cheatSheetIds.map((id) => generateCheatSheetItem(id))),
  })

  await seedCheatSheetItemTags()
}

const generateCheatSheetItem = (cheatSheetId: CheatSheetItem['id']) => {
  const ITEMS_PER_CHEAT_SHEET = faker.number.int({ min: 0, max: 20 })

  return times(ITEMS_PER_CHEAT_SHEET, () =>
    makeCheatSheetItem({ cheatSheetId }),
  )
}

const seedCheatSheetItemTags = async () => {
  const tagIds = (await pluckModelField('Tag', 'id')) as Tag['id'][]
  const cheatSheetItemIds = (await pluckModelField(
    'CheatSheetItem',
    'id',
  )) as CheatSheetItem['id'][]

  await prisma.cheatSheetItemsOnTags.createMany({
    data: flatten(cheatSheetItemIds.map((id) => generatePivot(tagIds, id))),
  })
}

const generatePivot = (
  tagIds: Tag['id'][],
  cheatSheetItemId: CheatSheetItem['id'],
) => {
  const TAGS_PER_ITEM = faker.number.int({ min: 0, max: 5 })
  const shuffledIds = shuffle(tagIds)

  return times<Omit<CheatSheetItemsOnTags, 'id'>>(TAGS_PER_ITEM, (index) => ({
    cheatSheetItemId,
    tagId: shuffledIds[index],
  }))
}
