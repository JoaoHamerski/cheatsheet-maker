import { userSeeder } from './seeders/user-seeder'

async function main() {
  await Promise.all([userSeeder()])
}

main().then(() => {
  console.log('Database seeded successfully!')
})
