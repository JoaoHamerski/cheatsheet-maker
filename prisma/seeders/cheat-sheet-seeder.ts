import { faker } from '@faker-js/faker'
import { flatten, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheet } from '../factories/cheat-sheet-factory'
import { pluckModelField } from '../utils'
import type { User } from '@prisma/client'

const CHEAT_SHEETS_PER_USER = { min: 0, max: 15 }

export const cheatSheetSeeder = async () => {
  await prisma.cheatSheet.createMany({
    data: await generateCheatSheets(),
  })
}

const generateCheatSheets = async () => {
  const userIds = (await pluckModelField('User', 'id')) as User['id'][]

  return flatten(userIds.map((userId) => generateUserCheatSheets(userId)))
}

const generateUserCheatSheets = (userId: number) => {
  const cheatSheetsQuantity = faker.number.int(CHEAT_SHEETS_PER_USER)

  return times(cheatSheetsQuantity, () => makeCheatSheet({ userId }))
}
