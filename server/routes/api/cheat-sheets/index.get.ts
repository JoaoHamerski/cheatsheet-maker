import type { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'

export type CheatSheetsIndex = Prisma.PromiseReturnType<
  typeof getCheatSheetWithItems
>

export default defineEventHandler(async (event) => {
  const user = await auth.user(event)

  if (!user) {
    return []
  }

  return await getCheatSheetWithItems(user.id)
})

const getCheatSheetWithItems = async (userId: number) => {
  return await prisma.cheatSheet.findMany({
    select: {
      uuid: true,
      title: true,
      alias: true,
      cheatSheetItems: { take: 5 },
      _count: { select: { cheatSheetItems: true } },
    },
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
}
