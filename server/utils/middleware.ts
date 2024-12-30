import type { User } from '@prisma/client'
import type { H3Event } from 'h3'

type DefineMiddlewareEventHandlerFn = <T>(
  handler: (event: H3Event, user: User) => T | Promise<T>,
) => void

const defineMiddlewareEventHandler: DefineMiddlewareEventHandlerFn = (
  handler,
) => {
  return defineEventHandler(async (event) => {
    const user = await auth.user(event)

    if (!user) {
      throw createError({ statusCode: 401 })
    }

    return handler(event, user)
  })
}

export default defineMiddlewareEventHandler
