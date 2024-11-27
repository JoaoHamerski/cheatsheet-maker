import { faker } from '@faker-js/faker'
import { flatten, shuffle, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheetItem } from '../factories/cheat-sheet-item-factory'
import type { CheatSheetItem, CheatSheetItemsOnTags, Tag } from '@prisma/client'
import { pluckModelField } from '../utils'

const ITEMS_PER_CHEAT_SHEET = { min: 0, max: 20 }
const TAGS_PER_ITEM = { min: 0, max: 5 }

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
  const itemsQuantity = faker.number.int(ITEMS_PER_CHEAT_SHEET)

  return times(itemsQuantity, () => makeCheatSheetItem({ cheatSheetId }))
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
  const tagsQuantity = faker.number.int(TAGS_PER_ITEM)
  const shuffledIds = shuffle(tagIds)

  return times<Omit<CheatSheetItemsOnTags, 'id'>>(tagsQuantity, (index) => ({
    cheatSheetItemId,
    tagId: shuffledIds[index],
  }))
}
