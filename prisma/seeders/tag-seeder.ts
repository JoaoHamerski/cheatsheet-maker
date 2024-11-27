import { faker } from '@faker-js/faker'
import { times } from 'lodash-es'
import prisma from '~/lib/prisma'
import { makeTag } from '../factories/tag-factory'

const TAGS_QUANTITY = { min: 5, max: 20 }

export const tagSeeder = async () => {
  const tagsQuantity = faker.number.int(TAGS_QUANTITY)

  await prisma.tag.createMany({
    data: times(tagsQuantity, () => makeTag()),
  })
}
