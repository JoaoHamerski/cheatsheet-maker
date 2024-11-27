import { faker } from '@faker-js/faker'
import { flatten, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheet } from '../factories/cheat-sheet-factory'
import { pluckModelField } from '../utils'
import type { User } from '@prisma/client'

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
  const CHEAT_SHEETS_PER_USER = faker.number.int({ min: 0, max: 15 })

  return times(CHEAT_SHEETS_PER_USER, () => makeCheatSheet({ userId }))
}
