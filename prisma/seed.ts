import { cheatSheetItemSeeder } from './seeders/cheat-sheet-item-seeder'
import { cheatSheetSeeder } from './seeders/cheat-sheet-seeder'
import { tagSeeder } from './seeders/tag-seeder'
import { userSeeder } from './seeders/user-seeder'

async function main() {
  const SEEDERS = [
    tagSeeder,
    userSeeder,
    cheatSheetSeeder,
    cheatSheetItemSeeder,
  ]

  for (const seed of SEEDERS) {
    await seed()
  }
}

main().then(() => {
  console.log('Database seeded successfully!')
})
