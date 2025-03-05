import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { submissionId, evaluatorId, score, feedback } = await req.json();

    const evaluation = await prisma.evaluation.create({
      data: {
        submissionId,
        evaluatorId,
        score,
        feedback,
      },
    });

    await prisma.submission.update({
      where: { id: submissionId },
      data: { status: 'GRADED' },
    });

    return NextResponse.json(evaluation);
  } catch (error) {
    console.error('Error creating evaluation:', error);
    return NextResponse.json({ error: 'Failed to evaluate submission' }, { status: 500 });
  }
}
