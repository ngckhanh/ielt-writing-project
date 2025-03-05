/*
  Warnings:

  - You are about to drop the `PracticeSubmission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestResponse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WritingPrompt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'EVALUATOR');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'GRADING', 'GRADED');

-- DropForeignKey
ALTER TABLE "PracticeSubmission" DROP CONSTRAINT "PracticeSubmission_promptId_fkey";

-- DropForeignKey
ALTER TABLE "PracticeSubmission" DROP CONSTRAINT "PracticeSubmission_userId_fkey";

-- DropForeignKey
ALTER TABLE "TestResponse" DROP CONSTRAINT "TestResponse_promptId_fkey";

-- DropForeignKey
ALTER TABLE "TestResponse" DROP CONSTRAINT "TestResponse_testSessionId_fkey";

-- DropForeignKey
ALTER TABLE "TestSession" DROP CONSTRAINT "TestSession_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "PracticeSubmission";

-- DropTable
DROP TABLE "TestResponse";

-- DropTable
DROP TABLE "TestSession";

-- DropTable
DROP TABLE "WritingPrompt";

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" SERIAL NOT NULL,
    "submissionId" INTEGER NOT NULL,
    "evaluatorId" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "feedback" TEXT NOT NULL,
    "evaluatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Evaluation_submissionId_key" ON "Evaluation"("submissionId");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
