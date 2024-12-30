import type { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'
import defineMiddlewareEventHandler from '~/server/utils/middleware'

export type CheatSheetsShow = Prisma.PromiseReturnType<typeof getCheatSheet>

export default defineMiddlewareEventHandler(async (event) => {
  const uuid = event.context.params?.uuid

  return await getCheatSheet(uuid as string)
})

const getCheatSheet = async (uuid: string) => {
  return await prisma.cheatSheet.findFirst({ where: { uuid } })
}
