import type { User } from '@prisma/client'
import { faker } from '@faker-js/faker'

export const createUser = (overwrites: Partial<User> = {}): User => {
  return {
    id: 1,
    uuid: faker.string.uuid(),
    name: faker.person.fullName(),
    syncKey: faker.string.alpha(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    ...overwrites,
  }
}
