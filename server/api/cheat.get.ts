import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  return prisma.user.findFirst()
})
