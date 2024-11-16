import prisma from '~/lib/prisma'
import { makeUser } from '../factories/user-factory'
import { times } from 'lodash-es'
import { faker } from '@faker-js/faker'

export const userSeeder = async () => {
  const USERS_QUANTITY = faker.number.int({ min: 10, max: 20 })

  await prisma.user.createMany({
    data: times(USERS_QUANTITY, () => makeUser()),
  })
}
