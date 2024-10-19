type CheatSheet = {
  id: string
  title: string
  alias: string
  is_fixed: boolean
  created_at: string
  updated_at: string
}

type CheatSheetItem = {
  id: string
  cheat_sheet_id: string
  title: string
  body: string
  tags: string[]
  is_fixed: boolean
  created_at: string
  updated_at: string
}
