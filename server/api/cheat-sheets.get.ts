import type { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'

export type CheatSheetsWithItems = Prisma.PromiseReturnType<
  typeof getCheatSheetWithItems
>

const getCheatSheetWithItems = async () => {
  return prisma.cheatSheet.findMany({
    select: {
      title: true,
      _count: { select: { cheatSheetItems: true } },
      cheatSheetItems: { take: 5 },
    },
    take: 10,
  })
}

export default defineEventHandler(async () => {
  return await getCheatSheetWithItems()
})
