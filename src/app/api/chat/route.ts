import { NextRequest, NextResponse } from 'next/server';
import { callAI } from '@/lib/ai';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as { prompt?: string };
        const { prompt } = body;

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const response = await callAI(prompt);

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
