import type { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'
import type { H3Event } from 'h3'

export type CheatSheetsWithItems = Prisma.PromiseReturnType<
  typeof getCheatSheetWithItems
>

const getCheatSheetWithItems = async (event: H3Event) => {
  const user = await auth.user(event)

  if (!user) {
    return []
  }

  return prisma.cheatSheet.findMany({
    select: {
      title: true,
      alias: true,
      cheatSheetItems: { take: 5 },
      _count: { select: { cheatSheetItems: true } },
    },
    where: {
      userId: user.id,
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
}

export default defineEventHandler(async (event) => {
  return await getCheatSheetWithItems(event)
})
