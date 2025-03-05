import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { content, userId } = await req.json();

    const submission = await prisma.submission.create({
      data: {
        content,
        userId,
        status: 'PENDING',
      },
    });

    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error creating submission:', error);
    return NextResponse.json({ error: 'Failed to create submission' }, { status: 500 });
  }
}
