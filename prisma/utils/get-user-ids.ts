import { map, sortBy } from 'lodash-es'
import prisma from '~/lib/prisma'

export const getUserIds = async () => {
  const users = await prisma.user.findMany({ select: { id: true } })
  const userIds = sortBy(map(users, 'id'))

  return userIds
}
