import prisma from '~/lib/prisma'
import { makeUser } from '../factories/user-factory'
import { times } from 'lodash-es'
import { faker } from '@faker-js/faker'

const USERS_QUANTITY = { min: 10, max: 20 }

export const userSeeder = async () => {
  const usersQuantity = faker.number.int(USERS_QUANTITY)

  await prisma.user.createMany({
    data: times(usersQuantity, () => makeUser()),
  })
}
