-- CreateTable
CREATE TABLE "ShortenedLinks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "counter" INTEGER NOT NULL DEFAULT 0
);
