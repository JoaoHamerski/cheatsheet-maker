import { faker } from '@faker-js/faker'
import { map, sortBy, times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeCheatSheet } from '../factories/cheat-sheet-factory'

export const cheatSheetSeeder = async () => {
  const users = await prisma.user.findMany({ select: { id: true } })
  const userIds = sortBy(map(users, 'id'))

  const cheatSheets = []

  for (const userId of userIds) {
    const quantity = faker.number.int({ min: 0, max: 15 })

    cheatSheets.push(...times(quantity, () => makeCheatSheet({ userId })))
  }

  await prisma.cheatSheet.createMany({
    data: cheatSheets,
  })
}
