import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  const items = prisma.cheatSheet.findMany({ take: 20 })

  return items
})
