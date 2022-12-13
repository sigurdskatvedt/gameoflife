-- CreateTable
CREATE TABLE "Rule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "stateNames" TEXT[],
    "others" INTEGER NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chunk" (
    "id" TEXT NOT NULL,
    "newState" INTEGER NOT NULL,
    "ruleId" TEXT NOT NULL,

    CONSTRAINT "Chunk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cond" (
    "id" TEXT NOT NULL,
    "nbr" INTEGER[],
    "nbgStates" INTEGER NOT NULL,
    "chunkId" TEXT NOT NULL,
    "states" INTEGER[],

    CONSTRAINT "Cond_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chunk" ADD CONSTRAINT "Chunk_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cond" ADD CONSTRAINT "Cond_chunkId_fkey" FOREIGN KEY ("chunkId") REFERENCES "Chunk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
