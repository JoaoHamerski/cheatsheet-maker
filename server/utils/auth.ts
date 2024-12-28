import type { User } from '@prisma/client'
import type { H3Event } from 'h3'
import prisma from '~/lib/prisma'

type UserFn = (event: H3Event) => Promise<User | null>
type RegisterFn = (event: H3Event) => Promise<User>

const user: UserFn = async (event) => {
  const appSession = await session.use(event)
  const syncKey = appSession.data.sync_key

  if (!syncKey) {
    return null
  }

  return await prisma.user.findFirst({
    where: { syncKey },
  })
}

const register: RegisterFn = async (event) => {
  const appSession = await session.use(event)

  const user = await prisma.user.create({
    data: { syncKey: crypto.randomUUID() },
  })

  await appSession.update({ sync_key: user.syncKey })

  return user
}

export default { user, register }
