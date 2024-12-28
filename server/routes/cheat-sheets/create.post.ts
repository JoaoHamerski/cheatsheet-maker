import prisma from '~/lib/prisma'
import type { H3Event } from 'h3'
import type { ValidationError } from 'yup'
import { object, string } from 'yup'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const user = await getUser(event)

  const schema = object({
    sheet_title: string().required().min(3),
  })

  try {
    const validated = await schema.validate(data, { abortEarly: false })

    return await prisma.cheatSheet.create({
      data: {
        userId: user.id,
        title: validated.sheet_title,
      },
    })
  } catch (error) {
    const errors = formError.parse(error as ValidationError)

    throw createError({
      status: 443,
      data: { errors },
      statusText: 'Unauthorized',
    })
  }
})

const getUser = async (event: H3Event) => {
  return (await auth.user(event)) ?? (await auth.register(event))
}
