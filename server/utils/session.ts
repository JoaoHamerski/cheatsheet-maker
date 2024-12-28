import type { H3Event } from 'h3'

const SESSION_MAX_AGE = 365 * 24 * 60 * 60 * 1000

const use = async (event: H3Event) => {
  return await useSession(event, {
    name: 'cheater-session',
    password: process.env.SESSION_ENCRYPT_PASSWORD as string,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    },
    maxAge: SESSION_MAX_AGE,
  })
}

export default { use }
