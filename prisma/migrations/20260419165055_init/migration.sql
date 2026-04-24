-- CreateTable
CREATE TABLE "Sheet" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "lyrics" TEXT NOT NULL,
    "notation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("id")
);
