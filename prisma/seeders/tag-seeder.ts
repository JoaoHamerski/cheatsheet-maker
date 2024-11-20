import { faker } from '@faker-js/faker'
import { times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeTag } from '../factories/tag-factory'

export const tagSeeder = async () => {
  const TAGS_QUANTITY = faker.number.int({ min: 5, max: 20 })

  await prisma.tag.createMany({
    data: times(TAGS_QUANTITY, () => makeTag()),
  })
}
