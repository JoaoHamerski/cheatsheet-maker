-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "syncKey" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CheatSheet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "alias" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CheatSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CheatSheetItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "cheatSheetId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "isFixed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CheatSheetItem_cheatSheetId_fkey" FOREIGN KEY ("cheatSheetId") REFERENCES "CheatSheet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CheatSheetItemsOnTags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cheatSheetItemId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    CONSTRAINT "CheatSheetItemsOnTags_cheatSheetItemId_fkey" FOREIGN KEY ("cheatSheetItemId") REFERENCES "CheatSheetItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CheatSheetItemsOnTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_syncKey_key" ON "User"("syncKey");

-- CreateIndex
CREATE UNIQUE INDEX "CheatSheet_userId_alias_key" ON "CheatSheet"("userId", "alias");

-- CreateIndex
CREATE UNIQUE INDEX "CheatSheetItemsOnTags_cheatSheetItemId_tagId_key" ON "CheatSheetItemsOnTags"("cheatSheetItemId", "tagId");
