import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const data = await readFormData(event)
  let user = await auth.user(event)
  if (!user) {
    user = await auth.register(event)
  }

  await prisma.cheatSheet.create({
    data: {
      userId: user.id,
      title: data.get('sheet-name') as string,
    },
  })

  return sendRedirect(event, '/')
})
