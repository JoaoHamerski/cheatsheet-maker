import type { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'

// TODO: Deal with TypeScript hell
export async function pluckModelField(
  entity: Prisma.ModelName,
  field: string,
): Promise<string[] | number[]> {
  const model = prisma[entity]

  const records = await model.findMany({ select: { [field]: true } })

  return records.map((record: { [prop: string]: string }) => record[field])
}
