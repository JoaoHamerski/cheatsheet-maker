import { cheatSheetSeeder } from './seeders/cheat-sheet-seeder'
import { userSeeder } from './seeders/user-seeder'

async function main() {
  const SEEDERS = [userSeeder, cheatSheetSeeder]

  for (const seed of SEEDERS) {
    await seed()
  }
}

main().then(() => {
  console.log('Database seeded successfully!')
})
