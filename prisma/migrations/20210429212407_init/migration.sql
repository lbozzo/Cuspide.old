-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Author" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT
);
INSERT INTO "new_Author" ("id", "name", "url") SELECT "id", "name", "url" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE UNIQUE INDEX "Author.name_unique" ON "Author"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
