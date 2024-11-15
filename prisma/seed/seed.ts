/**
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'
import { createUser } from '../factories/user-factory'

const main = async () => {
  const seed = await createSeedClient()

  await seed.$resetDatabase()

  await seed.user((x) => x(1000, ({ index }) => createUser({ id: index })))

  console.log('Database seeded successfully!')

  process.exit()
}

main()
