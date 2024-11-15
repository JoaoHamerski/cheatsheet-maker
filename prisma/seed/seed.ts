/**
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'
import { makeUser } from '../factories/user-factory'
import { makeCheatSheet } from '../factories/cheat-sheet-factory'

const main = async () => {
  const seed = await createSeedClient()

  await seed.$resetDatabase()

  await seed.user((x) =>
    x({ min: 0, max: 15 }, () => ({
      ...makeUser(),
      cheatSheet: (x) => x({ min: 0, max: 20 }, () => makeCheatSheet()),
    })),
  )

  console.log('Database seeded successfully!')

  process.exit()
}

main()
