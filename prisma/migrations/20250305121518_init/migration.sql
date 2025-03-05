/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `MockTest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Practice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Writing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MockTest" DROP CONSTRAINT "MockTest_userId_fkey";

-- DropForeignKey
ALTER TABLE "Practice" DROP CONSTRAINT "Practice_userId_fkey";

-- DropForeignKey
ALTER TABLE "Writing" DROP CONSTRAINT "Writing_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "MockTest";

-- DropTable
DROP TABLE "Practice";

-- DropTable
DROP TABLE "Writing";

-- CreateTable
CREATE TABLE "WritingPrompt" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WritingPrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeSubmission" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "promptId" INTEGER NOT NULL,
    "input" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "feedback" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PracticeSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestSession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "overallScore" DECIMAL(65,30) NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestResponse" (
    "id" SERIAL NOT NULL,
    "testSessionId" INTEGER NOT NULL,
    "promptId" INTEGER NOT NULL,
    "input" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "feedback" TEXT,

    CONSTRAINT "TestResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PracticeSubmission" ADD CONSTRAINT "PracticeSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSubmission" ADD CONSTRAINT "PracticeSubmission_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "WritingPrompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestSession" ADD CONSTRAINT "TestSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResponse" ADD CONSTRAINT "TestResponse_testSessionId_fkey" FOREIGN KEY ("testSessionId") REFERENCES "TestSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResponse" ADD CONSTRAINT "TestResponse_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "WritingPrompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
