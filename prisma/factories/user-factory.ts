import type { User } from '@prisma/client'
import { faker } from '@faker-js/faker'
import type { FactoryFunction } from './types'

export const makeUser: FactoryFunction<User> = (overwrites = {}) => {
  const timestamp = faker.date.past()
  const fullName = faker.person.firstName() + ' ' + faker.person.lastName()

  return {
    uuid: faker.string.uuid(),
    name: fullName,
    syncKey: faker.string.uuid(),
    createdAt: timestamp,
    updatedAt: timestamp,
    ...overwrites,
  } as User
}
